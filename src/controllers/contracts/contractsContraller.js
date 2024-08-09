const { Contracts } = require("../../db");
const { WrongParametersError } = require("../../helpers");
const { addContracts } = require("../../services");

const addContractsController = async (req, res) => {
  const newCounterparty = req.body;

  const couterparty = await addContracts(newCounterparty);

  res.json({ couterparty, status: "success" });
};

module.exports = { addContractsController };
