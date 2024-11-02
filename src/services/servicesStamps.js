const { SpecificationFSM } = require("../db");
const { Contracts } = require("../db");
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

  const dataManager = { email: manager[0].email, id: manager[0]._id };

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
    manager: dataManager,
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

const updateStamps = async (req) => {
  const { companyId } = req;
  const { id } = req.params;
  const { body } = req;
  const { factory } = req.body;
  const orderStamps = await SpecificationFSM.find({ _id: id, companyId });
  if (!orderStamps.length) {
    throw new WrongParametersError("Заказ отсутствует");
  }

  const searchFactory = await Contracts.find({ companyId, _id: factory });
  if (!searchFactory.length) {
    throw new WrongParametersError("Производитель не найден.");
  }
  req.body.factory = searchFactory[0];

  await SpecificationFSM.findByIdAndUpdate(id, { $set: body });
  const updatedStamps = await SpecificationFSM.findById(id);
  return updatedStamps;
};

module.exports = {
  getStamps,
  addStamps,
  delStamps,
  openStams,
  updateStamps,
};
