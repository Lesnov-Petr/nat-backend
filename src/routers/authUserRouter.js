const express = require("express");
const router = express.Router();
const { wrapperAuth } = require("../helpers");
const { loginManagerController } = require("../controllers/auth");

router
  .post("/login", wrapperAuth(loginManagerController))
  .post("/logout", wrapperAuth());

module.exports = { authUserRouter: router };
