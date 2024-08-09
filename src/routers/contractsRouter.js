const express = require("express");
const router = express.Router();
const { wrapper } = require("../helpers");
const { addContractsController } = require("../controllers/contracts");
const { rolesList } = require("../rolesList/rolesList");

router.post("/", wrapper(addContractsController, rolesList.Manager));

module.exports = { contractsRouter: router };
