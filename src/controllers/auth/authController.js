const { token } = require("morgan");
const { registration, login } = require("../../services");

const registrationController = async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
  await registration(email, password);
  res.json({ message: "success" });
};

const loginController = async (req, res) => {
  const { email, password } = req.body;
  const token = await login(email, password);

  res.json({ message: "login success", token });
};

module.exports = { registrationController, loginController };
