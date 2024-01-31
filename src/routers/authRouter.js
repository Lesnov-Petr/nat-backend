const express = require("express");
const router = express.Router();
const { wrapper } = require("../helpers");
const {
  registrationController,
  loginController,
} = require("../controllers/auth");

router
  .post("/registration", wrapper(registrationController))
  .post("/login", wrapper(loginController));

module.exports = { authRouter: router };
