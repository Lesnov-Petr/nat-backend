const express = require("express");
const router = express.Router();
const { wrapper } = require("../helpers");
const { addContactValidation } = require("../middlewares");
const {
  getContactsController,
  getContactByIdController,
  addContactNewController,
  deleteContactByIdController,
  updateContactBiIdController,
} = require("../controllers/Contacts");

router
  .get("/", wrapper(getContactsController))
  .get("/:id", wrapper(getContactByIdController))
  .post("/", addContactValidation, wrapper(addContactNewController))
  .delete("/:id", wrapper(deleteContactByIdController))
  .put("/:id", wrapper(updateContactBiIdController));

module.exports = { contactsRouter: router };
