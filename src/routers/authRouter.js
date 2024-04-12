const express = require("express");
const router = express.Router();
const { wrapperAuth } = require("../helpers");
const {
  registrationController,
  loginController,
} = require("../controllers/auth");

router
  .post("/registration", wrapperAuth(registrationController))
  .post("/login", wrapperAuth(loginController));

module.exports = { authRouter: router };
