const { RolesError } = require("../helpers/error");

const middlewareRoles = async (arrayRoles) => {
  console.log(arrayRoles);
  return (req, res, next) => {
    console.log("log", req);
    if (!req?.rules) {
      next(new RolesError("У Вас отсутствуют права"));
    }

    const result = req.roles.map((role) => arrayRoles.includes(role));
    // next();
    console.log(result);
  };
};

module.exports = { middlewareRoles };
