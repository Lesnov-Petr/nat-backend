const jwt = require("jsonwebtoken");
const { AuthorizationError } = require("../helpers/error");

const middlewareAuth = (req, res, next) => {
  const authHeaders = req.headers["authorization"];

  if (!authHeaders?.startsWith("Bearer ")) {
    next(new AuthorizationError("Please, provide token"));
  }

  const [tokenType, token] = authHeaders.split(" ");

  jwt.verify(token, process.env.JWT_SECRET, (err, decode) => {
    if (err) {
      next(new AuthorizationError("invalid token"));
    }
    req.token = token;
    req.companyId = decode._id;
    req.roles = decode.roles;
    next();
  });
};

const middlewareAuthUser = (req, res, next) => {
  const authHeaders = req.headers["authorization"];

  if (!authHeaders?.startsWith("Bearer ")) {
    next(new AuthorizationError("Please, provide token"));
  }

  const [tokenType, token] = authHeaders.split(" ");

  jwt.verify(token, process.env.JWT_SECRET, (err, decode) => {
    if (err) {
      next(new AuthorizationError("invalid token"));
    }
    req.token = token;
    req.companyId = decode._id;
    req.roles = decode.roles;
    next();
  });
};

module.exports = { middlewareAuth, middlewareAuthUser };
