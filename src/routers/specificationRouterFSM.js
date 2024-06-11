const express = require("express");
const router = express.Router();
const { wrapper } = require("../helpers");
const {
  getSpecificationControllerFSM,
  addSpecificationControllerFSM,
  delSpecificationControllerFSM,
  openSpecificationFSMController,
} = require("../controllers/specificationFSM");
const { rolesList } = require("../rolesList/rolesList");

router
  .get("/", wrapper(getSpecificationControllerFSM, rolesList.User))
  .get("/:id", wrapper(openSpecificationFSMController, rolesList.User))
  .post("/", wrapper(addSpecificationControllerFSM, rolesList.Manager))
  .delete("/:id", wrapper(delSpecificationControllerFSM, rolesList.Manager));

module.exports = { specificationRouterFSM: router };
