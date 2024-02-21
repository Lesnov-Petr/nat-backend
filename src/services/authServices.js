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

  const token = jwt.sign(
    {
      _id: company._id,
      createAt: company.createAt,
      roles: company.roles,
    },
    process.env.JWT_SECRET
  );

  return token;
};

const loginManager = async (token, email, password) => {
  const companyId = await readToken(token);
  const manager = await User.findOne({ email });

  if (companyId && !manager) {
    const newManager = new User({ email, password, companies: [companyId] });
    await newManager.save();
    await Company.findOneAndUpdate(
      { _id: companyId },
      { $push: { employees: newManager } }
    );
    return newManager;
  }

  if (companyId && manager) {
    const company = await Company.findOne({ companyId });
    const [isExistManager] = company.employees.filter(
      ({ email }) => email === manager.email
    );

    if (!isExistManager) {
      await Company.findOneAndUpdate(
        { _id: companyId },
        { $push: { employees: manager } }
      );
    }

    return manager;
  }
};

const readToken = async (token) => {
  let companyId = "";
  jwt.verify(token, process.env.JWT_SECRET, (err, decode) => {
    if (err) {
      next(new AuthorizationError("invalid token"));
    }
    companyId = decode._id;
  });
  return companyId;
};

module.exports = { registration, login, loginManager };
