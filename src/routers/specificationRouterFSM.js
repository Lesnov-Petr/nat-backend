const express = require("express");
const router = express.Router();
const { wrapper } = require("../helpers");
const {
  getSpecificationControllerFSM,
  addSpecificationControllerFSM,
} = require("../controllers/specificationFSM");

router
  .get("/", wrapper(getSpecificationControllerFSM))
  .post("/", wrapper(addSpecificationControllerFSM));

module.exports = { specificationRouterFSM: router };
