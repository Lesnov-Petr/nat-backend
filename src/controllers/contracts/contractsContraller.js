const { json } = require("express");
const { Contracts } = require("../../db");
const { WrongParametersError } = require("../../helpers");
const {
  addContracts,
  getListCounterparty,
  delCounterparty,
  getCounterparty,
  searchContracts,
} = require("../../services");

const addContractsController = async (req, res) => {
  const newCounterparty = req.body;
  const { companyId } = req;
  newCounterparty.companyId = companyId;

  const couterparty = await addContracts(newCounterparty);

  res.json({ couterparty, status: "success" });
};

const getListCounterpartyController = async (req, res) => {
  const { companyId } = req;

  const listCounterpartyes = await getListCounterparty(companyId);
  res.json({ listCounterpartyes, status: "success" });
};
const searchCounterpartyController = async (req, res) => {
  const { companyId } = req;
  const { value } = req.body;

  const filterContracts = await searchContracts(companyId, value);

  res.json({ filterContracts, status: "success" });
};

const openCounterpartyController = async (req, res) => {
  const { id } = req.params;
  const isCounterparty = await getCounterparty(id);
  res.json({ isCounterparty, status: "success" });
};

const delCounterpartyController = async (req, res) => {
  const { id } = req.params;
  await delCounterparty(id);
  res.json({ message: `Вы удалили контрагента`, status: "success" });
};

module.exports = {
  addContractsController,
  delCounterpartyController,
  getListCounterpartyController,
  openCounterpartyController,
  searchCounterpartyController,
};
