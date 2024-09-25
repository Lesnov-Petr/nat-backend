const { Contracts } = require("../db");
const { WrongParametersError } = require("../helpers");

const addContracts = async (newCounterparty) => {
  console.log("log", newCounterparty);
  const { inn } = newCounterparty;

  const isInn = await Contracts.findOne({ inn });

  if (isInn) {
    throw new WrongParametersError("Организация с таким ИНН существует");
  }

  const counterparty = new Contracts(newCounterparty);
  await counterparty.save();
  return counterparty;
};

const getListCounterparty = async (companyId) => {
  const listCounterpartyes = await Contracts.find({ companyId });

  return listCounterpartyes;
};

const getCounterparty = async (idCounterparty) => {
  const counterparty = await Contracts.findById({ _id: idCounterparty });
  return counterparty;
};

const searchContracts = async (companyId, query) => {
  if (!query.trim()) {
    return [];
  }

  const listCounterpartyes = await Contracts.find({ companyId });
  const queryNormalize = query.trim().toLowerCase().split();

  const filterContracs = listCounterpartyes.filter((contract) => {
    const nameCompany = contract.nameCompany.trim().toLowerCase();
    return nameCompany.includes(queryNormalize);
  });

  return filterContracs;
};

const delCounterparty = async (id, companyId) => {
  const isCompany = await Contracts.findByIdAndRemove({ _id: id, companyId });

  if (!isCompany) {
    throw new WrongParametersError("Такой организации не существует");
  }
  return isCompany.nameCompany;
};

module.exports = {
  addContracts,
  delCounterparty,
  getListCounterparty,
  getCounterparty,
  searchContracts,
};
