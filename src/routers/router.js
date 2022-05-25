const express = require("express");
const router = express.Router();
const { wrapper } = require("../helpers");

const {
  getContactsController,
  getContactByIdController,
  addContactNewController,
  deleteContactByIdController,
} = require("../controllers/Contacts");
const { addContactValidation } = require("../middlewares");

router
  .get("/", wrapper(getContactsController))
  .get("/:id", wrapper(getContactByIdController))
  .post("/", addContactValidation, wrapper(addContactNewController))
  .delete("/:id", wrapper(deleteContactByIdController));

module.exports = { contactsRouter: router };
