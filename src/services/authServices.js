const { User, Company } = require("../db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { AuthorizationError } = require("../helpers");

const registration = async (name, password) => {
  const existCompany = await Company.findOne({ name });

  if (existCompany) {
    throw new AuthorizationError(`Пользователь ${name} уже существует`);
  }
  const newCompany = new Company({ name, password });

  await newCompany.save();
  return login(name, password);
};

const login = async (name, password) => {
  const company = await Company.findOne({ name });

  if (!company || !(await bcrypt.compare(password, company.password))) {
    throw new AuthorizationError("Неправильный логин или пароль");
  }

  const { _id, employees, roles } = company;
  const token = await createToken(_id, employees, roles);

  return token;
};

const loginManager = async (token, email, password) => {
  const { companyId } = await readToken(token);
  const isManager = await User.findOne({ email });

  if (!companyId) {
    throw new AuthorizationError("Авторизуйте организацию");
  }

  if (companyId && !isManager) {
    const newManager = new User({ email, password, companies: [companyId] });
    await newManager.save();
    await Company.findOneAndUpdate(
      { _id: companyId },
      { $push: { employees: newManager } }
    );

    const roles = newManager.roles;

    const tokenManager = await createToken(companyId, [newManager], roles);
    return tokenManager;
  }

  if (companyId && isManager) {
    const company = await Company.findOne({ companyId });
    const [isExistManager] = company.employees.filter(
      ({ email }) => email === isManager.email
    );
    const roles = isExistManager.roles;
    const tokenManager = await createToken(companyId, [isExistManager], roles);

    return tokenManager;
  }
};

const checkCurrentUser = async (token) => {
  const { manager } = await readToken(token);

  const currentUser = {
    email: manager.email,
    roles: manager.roles,
  };

  // const company = await Company.findById({ _id: companyId }).select({
  //   password: 0,
  //   __v: 0,
  //   _id: 0,
  //   employees: 0,
  // });

  return currentUser;
};

const readToken = async (token) => {
  let companyId = "";
  let manager = "";
  jwt.verify(token, process.env.JWT_SECRET, (err, decode) => {
    if (err) {
      next(new AuthorizationError("invalid token"));
    }
    companyId = decode._id;
    [manager] = decode.manager;
  });
  return { manager, companyId };
};

const createToken = async (companyId, employees, roles) => {
  const token = jwt.sign(
    {
      _id: companyId,
      manager: employees,
      roles: roles,
    },
    process.env.JWT_SECRET
  );
  return token;
};
module.exports = { registration, login, loginManager, checkCurrentUser };
