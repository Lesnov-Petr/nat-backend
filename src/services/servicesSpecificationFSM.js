const { SpecificationFSM } = require("../db");
const { WrongParametersError } = require("../helpers");

const getSpecificatonFSM = async () => {
  const specificationFSM = await SpecificationFSM.find({});
  return specificationFSM;
};

const addSpecificationFSM = async (req) => {
  const {
    order,
    date,
    factory,
    viewAP,
    viewFSM,
    volumeProduct,
    degreeProduct,
    valueFSM,
  } = req.body;
  const specificationFSM = new SpecificationFSM({
    order,
    date,
    factory,
    viewAP,
    viewFSM,
    volumeProduct,
    degreeProduct,
    valueFSM,
  });
  await specificationFSM.save();
};

module.exports = { getSpecificatonFSM, addSpecificationFSM };
