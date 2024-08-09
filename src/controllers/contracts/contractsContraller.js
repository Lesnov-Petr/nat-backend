const { Contracts } = require("../../db");
const { WrongParametersError } = require("../../helpers");
const {
  addContracts,
  delCounterparty,
  getCounterparty,
} = require("../../services");

const addContractsController = async (req, res) => {
  const newCounterparty = req.body;
  const { companyId } = req;
  newCounterparty.companyId = companyId;

  const couterparty = await addContracts(newCounterparty);

  res.json({ couterparty, status: "success" });
};

const getCounterpartyController = async (req, res) => {
  const { companyId } = req;

  const listCounterpartyes = await getCounterparty(companyId);
  res.json({ listCounterpartyes, status: "success" });
};

const delCounterpartyController = async (req, res) => {
  const { id } = req.params;
  await delCounterparty(id);
  res.json({ message: `Вы удалили контрагента`, status: "success" });
};

module.exports = {
  addContractsController,
  delCounterpartyController,
  getCounterpartyController,
};
