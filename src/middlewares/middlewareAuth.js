const jwt = require("jsonwebtoken");
const { AuthorizationError } = require("../helpers/error");

const middlewareAuth = (req, res, next) => {
  const [tokenType, token] = req.headers["authorization"].split(" ");

  if (!token) {
    throw new AuthorizationError("Please, provide token");
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decode) => {
    if (err) {
      throw new AuthorizationError("invalid token");
    }
    req.token = token;
    req.companyId = decode._id;
    req.roles = decode.roles;
    next();
  });
};

const middlewareAuthUser = (req, res, next) => {
  const [tokenType, token] = req.headers["authorization"].split(" ");

  if (!token) {
    throw new AuthorizationError("Please, provide token");
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decode) => {
    if (err) {
      throw new AuthorizationError("invalid token");
    }
    req.token = token;
    req.companyId = decode._id;
    req.roles = decode.roles;
    next();
  });
};

module.exports = { middlewareAuth, middlewareAuthUser };
