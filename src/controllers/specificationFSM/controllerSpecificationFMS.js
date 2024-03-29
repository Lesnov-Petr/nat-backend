const { SpecificationFSM } = require("../../db");
const { WrongParametersError } = require("../../helpers");
const {
  getSpecificatonFSM,
  addSpecificationFSM,
  delSpecificationFSM,
} = require("../../services");

const getSpecificationControllerFSM = async (req, res) => {
  const { companyId } = req;
  const listSpecification = await getSpecificatonFSM(companyId);
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
  const { companyId } = req;

  await delSpecificationFSM(id, companyId);
  res.json({
    status: "success",
    id,
    message: `Спецификация c id ${id} удалена`,
  });
};

module.exports = {
  getSpecificationControllerFSM,
  addSpecificationControllerFSM,
  delSpecificationControllerFSM,
};
