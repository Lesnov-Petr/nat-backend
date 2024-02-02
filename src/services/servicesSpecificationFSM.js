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

  const isOrder = await SpecificationFSM.findOne({ order });
  if (isOrder) {
    throw new WrongParametersError(`Заказ с номером ${order} существует`);
  }

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
  console.log(specificationFSM);
  await specificationFSM.save();
};

module.exports = { getSpecificatonFSM, addSpecificationFSM };
