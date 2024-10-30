const express = require("express");
const router = express.Router();
const { wrapper } = require("../helpers");
const {
  createTypeAlcoholController,
  readTypeAlcoholController,
  updateTypeAlcoholController,
  deleteTypeAlcoholController,
  filterTypeAlcoholController,
} = require("../controllers/typeAlcohol");

router
  .post("/", wrapper(createTypeAlcoholController, rolesList.Manager))
  .get("/", wrapper(readTypeAlcoholController, rolesList.Manager))
  .get("/search", wrapper(filterTypeAlcoholController, rolesList.Manager))
  .patch("/:id", wrapper(updateTypeAlcoholController, rolesList.Manager))
  .delete("/:id", wrapper(deleteTypeAlcoholController, rolesList.Manager));

module.exports = { routerTypeAlcohol: router };
