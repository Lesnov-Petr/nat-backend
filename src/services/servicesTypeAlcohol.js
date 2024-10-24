const { TypeAlcohol } = require("../db");
const { WrongParametersError } = require("../helpers");

const addTypeAlcohol = async (req) => {
  const { name, samples } = req.body;
  const isName = await TypeAlcohol.findOne({ name });
  if (isName) {
    throw new WrongParametersError(
      `Тип алкогольной продукции ${name} существует`
    );
  }

  const newTypeAlcohol = new TypeAlcohol({ name, samples });

  await newTypeAlcohol.save();
  return newTypeAlcohol;
};

const getTypeAlcohol = async () => {
  const listTypeAlcohol = await TypeAlcohol.find({});
  return listTypeAlcohol;
};

const updateTypeAlcohol = async (req) => {
  const { name, samples } = req.body;
  const { id } = req.params;

  const typeAlcohol = await TypeAlcohol.findById({ _id: id });
  console.log(typeAlcohol);

  if (!typeAlcohol) {
    throw WrongParametersError(`Тип алкогольной продукции отсутствует`);
  }

  await TypeAlcohol.findByIdAndUpdate(id, {
    $set: { name, samples },
  });

  const getUpdateTypeAlcohol = await TypeAlcohol.findById({ _id: id });
  return getUpdateTypeAlcohol;
};

const deleteTypeAlcohol = async (req) => {
  const { id } = req.params;
  const delByIdTypeAlcoholawait = await TypeAlcohol.findByIdAndRemove({
    _id: id,
  });
  if (!delByIdTypeAlcoholawait) {
    throw WrongParametersError(`Так алкогольной продукции отсутствует`);
  }

  return id;
};

module.exports = {
  addTypeAlcohol,
  getTypeAlcohol,
  updateTypeAlcohol,
  deleteTypeAlcohol,
};
