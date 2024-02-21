const { token } = require("morgan");
const { registration, login, loginManager } = require("../../services");

const registrationController = async (req, res) => {
  const { name, password } = req.body;
  await registration(name, password);
  res.status(201).json({ message: `Успешная регистрация ${name}` });
};

const loginController = async (req, res) => {
  const { name, password } = req.body;
  const token = await login(name, password);
  res.status(200).json({ message: "login success", token });
};

const loginManagerController = async (req, res) => {
  const token = req.token;
  const { email, password } = req.body;

  const manager = await loginManager(token, email, password);

  return res.status(200).json({ message: "OK", manager });
};

module.exports = {
  registrationController,
  loginController,
  loginManagerController,
};
