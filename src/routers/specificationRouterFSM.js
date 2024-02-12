const express = require("express");
const router = express.Router();
const { wrapper } = require("../helpers");
const {
  getSpecificationControllerFSM,
  addSpecificationControllerFSM,
  delSpecificationControllerFSM,
} = require("../controllers/specificationFSM");

router
  .get("/", wrapper(getSpecificationControllerFSM))
  .post("/", wrapper(addSpecificationControllerFSM))
  .delete("/:id", wrapper(delSpecificationControllerFSM));

module.exports = { specificationRouterFSM: router };
