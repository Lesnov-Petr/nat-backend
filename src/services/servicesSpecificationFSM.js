const { SpecificationFSM } = require("../db");
const { WrongParametersError } = require("../helpers");

const getSpecificatonFSM = async (companyId) => {
  const specificationFSM = await SpecificationFSM.find({ companyId });
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

  const isOrder = await SpecificationFSM.findOne({
    order,
    companyId,
  });

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

const delSpecificationFSM = async (id, companyId) => {
  const isOrder = await SpecificationFSM.findByIdAndRemove({
    _id: id,
    companyId,
  });
  if (!isOrder) {
    throw new WrongParametersError("Такой спецификации нет");
  }
};

const openSpecificationFSM = async (orderId) => {
  const order = await SpecificationFSM.findById({ _id: orderId });

  if (!order) {
    throw new WrongParametersError("Заказ отсутствует");
  }
  return order;
};
module.exports = {
  getSpecificatonFSM,
  addSpecificationFSM,
  delSpecificationFSM,
  openSpecificationFSM,
};
