const {
  getStamps,
  addStamps,
  delStamps,
  openStams,
  updateStamps,
} = require("../../services");

const getDataString = (date) => {
  const day = pad(date.getDate());
  const month = pad(date.getMonth() + 1);
  const dateString = day + "." + month + "." + date.getFullYear();
  return dateString;
};

const pad = (value) => {
  return String(value).padStart(2, "0");
};

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

const updateStampsController = async (req, res) => {
  const date = new Date();
  const { manager } = req;
  const actionsManager = {
    manager: manager[0].email,
    date: getDataString(date),
    body: req.body,
  };

  const updatedStamps = await updateStamps(req);

  res.json({ state: "success", updatedStamps, actionsManager });
};

module.exports = {
  getStampsController,
  addStampsController,
  delStampsController,
  openStampsController,
  updateStampsController,
};
