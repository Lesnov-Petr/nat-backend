const jwt = require("jsonwebtoken");
const { AuthorizationError } = require("../helpers");

const middlewareAuth = (req, res, next) => {
  const [tokenType, token] = req.headers["authorization"].split(" ");
  console.log(tokenType, token);

  if (!token) {
    next(new AuthorizationError("Please, provide token"));
  }

  try {
    const user = jwt.decode(token, process.env.JWT_SECRET);
    req.token = token;
    req.user = user;
    next();
  } catch (error) {
    next(new AuthorizationError(error));
  }
};

module.exports = { middlewareAuth };
