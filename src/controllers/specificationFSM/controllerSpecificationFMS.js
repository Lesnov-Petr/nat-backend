const { SpecificationFSM } = require("../../db");
const { WrongParametersError } = require("../../helpers");
const {
  getSpecificatonFSM,
  addSpecificationFSM,
  delSpecificationFSM,
} = require("../../services");

const getSpecificationControllerFSM = async (req, res) => {
  const listSpecification = await getSpecificatonFSM();
  res.json({ listSpecification, status: "success" });
};
const addSpecificationControllerFSM = async (req, res) => {
  const { order } = req.body;

  const newSpecificationFSM = await addSpecificationFSM(req);

  res.json({
    status: "success",
    message: `Успешно создан заказ № ${order}`,
    newSpecificationFSM,
  });
};

const delSpecificationControllerFSM = async (req, res) => {
  const { id } = req.params;
  await delSpecificationFSM(id);
  res.json({ status: "success", message: "Спецификация удалена" });
};

module.exports = {
  getSpecificationControllerFSM,
  addSpecificationControllerFSM,
  delSpecificationControllerFSM,
};
