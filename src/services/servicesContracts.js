const { Contracts } = require("../db");
const { WrongParametersError } = require("../helpers");

const addContracts = async (newCounterparty) => {
  const { inn, name } = newCounterparty;

  const isInn = await Contracts.findOne({ inn });
  const isName = await Contracts.findOne({ name });

  if (isInn) {
    throw new WrongParametersError("Организация с таким ИНН существует");
  }

  if (isName) {
    throw new WrongParametersError(
      "Организация с таким наименованием существует"
    );
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
    const name = contract.name.trim().toLowerCase();
    return name.includes(queryNormalize);
  });

  return filterContracs;
};

const delCounterparty = async (id, companyId) => {
  const isCompany = await Contracts.findByIdAndRemove({ _id: id, companyId });

  if (!isCompany) {
    throw new WrongParametersError("Такой организации не существует");
  }
  return isCompany.name;
};

module.exports = {
  addContracts,
  delCounterparty,
  getListCounterparty,
  getCounterparty,
  searchContracts,
};
