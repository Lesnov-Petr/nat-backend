const {
  addTypeAlcohol,
  getTypeAlcohol,
  updateTypeAlcohol,
  deleteTypeAlcohol,
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
  await deleteTypeAlcohol(req);
  res.json({ status: "success" });
};

module.exports = {
  createTypeAlcoholController,
  readTypeAlcoholController,
  updateTypeAlcoholController,
  deleteTypeAlcoholController,
};
