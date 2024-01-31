const { SpecificationFSM } = require("../../db");
const { WrongParametersError } = require("../../helpers");
const { getSpecificatonFSM, addSpecificationFSM } = require("../../services");

const getSpecificationControllerFSM = async (req, res) => {
  const listSpecification = await getSpecificatonFSM();
  res.json({ listSpecification, status: "success" });
};
const addSpecificationControllerFSM = async (req, res) => {
  const { order } = req.body;

  await addSpecificationFSM(req);

  res.json({ status: "success", message: `Успешно создан заказ № ${order}` });
};

module.exports = {
  getSpecificationControllerFSM,
  addSpecificationControllerFSM,
};
