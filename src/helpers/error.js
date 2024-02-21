class CustomError extends Error {
  constructor(message) {
    super(message);
    this.status = 400;
  }
}

class ValidationError extends CustomError {
  constructor(message) {
    super(message);
    this.status = 400;
  }
}

class WrongParametersError extends CustomError {
  constructor(message) {
    super(message);
    this.status = 400;
  }
}

class AuthorizationError extends CustomError {
  constructor(message) {
    super(message);
    this.status = 401;
  }
}

class RolesError extends CustomError {
  constructor(message) {
    super(message);
    this.status = 401;
  }
}

module.exports = {
  ValidationError,
  WrongParametersError,
  AuthorizationError,
  RolesError,
  CustomError,
};
