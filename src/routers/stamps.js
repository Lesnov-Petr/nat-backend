const express = require("express");
const router = express.Router();
const { wrapper } = require("../helpers");
const {
  getStampsController,
  addStampsController,
  delStampsController,
  openStampsController,
} = require("../controllers/specificationFSM");
const { rolesList } = require("../rolesList/rolesList");

router
  .get("/", wrapper(getStampsController, rolesList.User))
  .get("/:id", wrapper(openStampsController, rolesList.User))
  .post("/", wrapper(addStampsController, rolesList.Manager))
  .delete("/:id", wrapper(delStampsController, rolesList.Manager));

module.exports = { stamps: router };
