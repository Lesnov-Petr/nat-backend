const { Contracts } = require("../db");
const { WrongParametersError } = require("../helpers");

const addContracts = async (newCounterparty) => {
  console.log("log", newCounterparty);
  const { inn } = newCounterparty;

  const isInn = await Contracts.findOne({ inn });

  if (isInn) {
    throw new WrongParametersError("Организация с таким ИНН существует");
  }

  const couterparty = new Contracts(newCounterparty);
  await couterparty.save();
  return couterparty;
};

const getCounterparty = async (companyId) => {
  const listCounterpartyes = await Contracts.find({ companyId });
  console.log(listCounterpartyes);

  return listCounterpartyes;
};

const delCounterparty = async (id) => {
  const isCompany = await Contracts.findByIdAndRemove({ _id: id });

  if (!isCompany) {
    throw new WrongParametersError("Такой организации не существует");
  }
};

module.exports = { addContracts, delCounterparty, getCounterparty };
