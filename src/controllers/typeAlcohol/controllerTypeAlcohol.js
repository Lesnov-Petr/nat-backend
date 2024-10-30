const {
  addTypeAlcohol,
  getTypeAlcohol,
  updateTypeAlcohol,
  deleteTypeAlcohol,
  filterListTypeAlcohol,
} = require("../../services");

const createTypeAlcoholController = async (req, res) => {
  const { name } = req.body;
  const newTypeAlcohol = await addTypeAlcohol(req);
  res.json({
    status: "success",
    newTypeAlcohol,
    message: `Вы добавили типа алкоголя ${name}`,
  });
};

const readTypeAlcoholController = async (_, res) => {
  const listTypeAlcohol = await getTypeAlcohol();
  res.json({ status: "success", listTypeAlcohol });
};

const updateTypeAlcoholController = async (req, res) => {
  const getUpdateTypeAlcohol = await updateTypeAlcohol(req);
  res.json({ status: "success", getUpdateTypeAlcohol });
};

const deleteTypeAlcoholController = async (req, res) => {
  const id = await deleteTypeAlcohol(req);
  res.json({ status: "success", id });
};

const filterTypeAlcoholController = async (req, res) => {
  console.log("LOG");

  const { query } = req.query;
  console.log(query);

  const filterTypeAlcohol = await filterListTypeAlcohol(query);
  res.json({ status: "success", filterTypeAlcohol });
};

module.exports = {
  createTypeAlcoholController,
  readTypeAlcoholController,
  updateTypeAlcoholController,
  deleteTypeAlcoholController,
  filterTypeAlcoholController,
};
