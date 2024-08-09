const { Contracts } = require("../db");
const { WrongParametersError } = require("../helpers");

const addContracts = async (newCounterparty) => {
  const { inn } = newCounterparty;

  const isInn = await Contracts.findOne({ inn });

  if (isInn) {
    throw new WrongParametersError("Организация с таким ИНН существует");
  }

  const couterparty = new Contracts(newCounterparty);
  await couterparty.save();
  return couterparty;
};

module.exports = { addContracts };
