const { CustomError, RolesError } = require("./error");

const wrapper = (controller, arrayRoles) => {
  return (req, res, next) => {
    const [result] = req.roles.map((role) => arrayRoles.includes(role));
    if (!result) {
      next(new RolesError("У Вас отсутствуют права"));
    }
    controller(req, res).catch(next);
  };
};

const wrapperAuth = (controller) => {
  return (req, res, next) => {
    controller(req, res).catch(next);
  };
};

const errorHandler = (error, req, res, next) => {
  if (error instanceof CustomError) {
    return res.status(error.status).json({ message: error.message });
  }
  res.status(500).json({ message: error.message });
};

module.exports = { wrapper, wrapperAuth, errorHandler };
