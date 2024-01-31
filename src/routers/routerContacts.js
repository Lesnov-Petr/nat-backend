const express = require("express");
const router = express.Router();
const { wrapper } = require("../helpers");
const { addContactValidation, middlewareAuth } = require("../middlewares");
const {
  getContactsController,
  getContactByIdController,
  addContactNewController,
  deleteContactByIdController,
  updateContactBiIdController,
} = require("../controllers/contact");

router
  .use(middlewareAuth)
  .get("/", wrapper(getContactsController))
  .get("/:id", wrapper(getContactByIdController))
  .post("/", addContactValidation, wrapper(addContactNewController))
  .delete("/:id", wrapper(deleteContactByIdController))
  .put("/:id", wrapper(updateContactBiIdController));

module.exports = { contactsRouter: router };
