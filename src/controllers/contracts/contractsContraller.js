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

  const counterparty = await addContracts(newCounterparty);

  res.json({ counterparty, status: "success" });
};

const getListCounterpartyController = async (req, res) => {
  const { companyId } = req;

  const listCounterpartyes = await getListCounterparty(companyId);
  res.json({ listCounterpartyes, status: "success" });
};
const searchCounterpartyController = async (req, res) => {
  const { companyId } = req;
  const { query } = req.query;

  const filterContracts = await searchContracts(companyId, query);

  res.json({ filterContracts, status: "success" });
};

const openCounterpartyController = async (req, res) => {
  const { id } = req.params;
  const isCounterparty = await getCounterparty(id);
  res.json({ isCounterparty, status: "success" });
};

const delCounterpartyController = async (req, res) => {
  const { id } = req.params;
  const { companyId } = req;

  const name = await delCounterparty(id, companyId);
  res.json({
    status: "success",
    id,
    message: `Контрагент ${name} был удален`,
  });
};

module.exports = {
  addContractsController,
  delCounterpartyController,
  getListCounterpartyController,
  openCounterpartyController,
  searchCounterpartyController,
};
