const express = require("express");
const router = express.Router();
const { wrapper } = require("../helpers");
const {
  addContractsController,
  delCounterpartyController,
  getListCounterpartyController,
  openCounterpartyController,
} = require("../controllers/contracts");
const { rolesList } = require("../rolesList/rolesList");

router
  .get("/", wrapper(getListCounterpartyController, rolesList.Manager))
  .get("/:id", wrapper(openCounterpartyController, rolesList.Manager))
  .post("/", wrapper(addContractsController, rolesList.Manager))
  .delete("/:id", wrapper(delCounterpartyController, rolesList.Manager));

module.exports = { contractsRouter: router };
