const {
  getStamps,
  addStamps,
  delStamps,
  openStams,
} = require("../../services");

const getStampsController = async (req, res) => {
  const { companyId } = req;
  const listSpecification = await getStamps(companyId);
  res.json({ listSpecification, status: "success" });
};

const openStampsController = async (req, res) => {
  const { id } = req.params;
  const specificationFSM = await openStams(id);
  res.json({ specificationFSM, status: "success" });
};
const addStampsController = async (req, res) => {
  const { name } = req.body;
  const newSpecificationFSM = await addStamps(req);

  res.json({
    status: "success",
    message: `Успешно создан заказ № ${name}`,
    newSpecificationFSM,
  });
};

const delStampsController = async (req, res) => {
  const { id } = req.params;
  const { companyId } = req;

  await delStamps(id, companyId);
  res.json({
    status: "success",
    id,
    message: `Спецификация c id ${id} удалена`,
  });
};

module.exports = {
  getStampsController,
  addStampsController,
  delStampsController,
  openStampsController,
};
