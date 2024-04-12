// const { token } = require("morgan");
const {
  registration,
  login,
  loginManager,
  checkCurrentUser,
  logOutUser,
} = require("../../services");

const registrationController = async (req, res) => {
  const { name, password } = req.body;
  token = await registration(name, password);
  res.status(201).json({ message: `Успешная регистрация ${name}`, token });
};

const loginController = async (req, res) => {
  const { name, password } = req.body;
  const token = await login(name, password);
  res.status(200).json({ message: "login success", token });
};

const loginManagerController = async (req, res) => {
  const token = req.token;
  const { email, password } = req.body;

  const tokenManager = await loginManager(token, email, password);

  return res.status(200).json({ message: "OK", email, tokenManager });
};

const currentUserController = async (req, res) => {
  const { token } = req;
  const currentUser = await checkCurrentUser(token);
  res.json({ message: "success", currentUser });
};

const logOutController = async (req, res) => {
  const { token } = req;
  await logOutUser(token);

  res.json({ message: "success" });
};

module.exports = {
  registrationController,
  loginController,
  loginManagerController,
  currentUserController,
  logOutController,
};
