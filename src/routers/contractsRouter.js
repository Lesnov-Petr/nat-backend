const express = require("express");
const router = express.Router();
const { wrapper } = require("../helpers");
const {
  addContractsController,
  delCounterpartyController,
  getCounterpartyController,
} = require("../controllers/contracts");
const { rolesList } = require("../rolesList/rolesList");

router
  .get("/", wrapper(getCounterpartyController, rolesList.Manager))
  .post("/", wrapper(addContractsController, rolesList.Manager))
  .delete("/:id", wrapper(delCounterpartyController, rolesList.Manager));

module.exports = { contractsRouter: router };
