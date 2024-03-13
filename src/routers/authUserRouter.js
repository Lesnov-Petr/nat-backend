const express = require("express");
const router = express.Router();
const { wrapperAuth } = require("../helpers");
const {
  loginManagerController,
  currentUserController,
} = require("../controllers/auth");

router
  .post("/login", wrapperAuth(loginManagerController))
  .post("/logout", wrapperAuth())
  .get("/current", wrapperAuth(currentUserController));

module.exports = { authUserRouter: router };
