const { SpecificationFSM } = require("../db");
const { WrongParametersError } = require("../helpers");

const getStamps = async (companyId) => {
  const specificationFSM = await SpecificationFSM.find({ companyId });
  return specificationFSM;
};

const addStamps = async (req) => {
  const {
    name,
    date,
    factory,
    viewAP,
    viewFSM,
    volumeProduct,
    degreeProduct,
    valueFSM,
    dateInvoice,
    dateDelivery,
    dateEnd,
    dateSend,
    dateDeliveryProducts,
    planDeliveryProducts,
    statusFSM,
  } = req.body;
  const { companyId } = req;
  const { manager } = req;

  const isName = await SpecificationFSM.findOne({
    name,
    companyId,
  });

  if (isName) {
    throw new WrongParametersError(`Заказ с номером ${name} существует`);
  }

  const specificationFSM = new SpecificationFSM({
    name,
    date,
    factory,
    viewAP,
    viewFSM,
    volumeProduct,
    degreeProduct,
    valueFSM,
    companyId,
    manager,
    dateInvoice,
    dateDelivery,
    dateEnd,
    dateSend,
    dateDeliveryProducts,
    planDeliveryProducts,
    statusFSM,
  });

  await specificationFSM.save();
  return specificationFSM;
};

const delStamps = async (id, companyId) => {
  const isName = await SpecificationFSM.findByIdAndRemove({
    _id: id,
    companyId,
  });
  if (!isName) {
    throw new WrongParametersError("Такой спецификации нет");
  }
};

const openStams = async (orderId) => {
  const name = await SpecificationFSM.findById({ _id: orderId });

  if (!name) {
    throw new WrongParametersError("Заказ отсутствует");
  }
  return name;
};
module.exports = {
  getStamps,
  addStamps,
  delStamps,
  openStams,
};
