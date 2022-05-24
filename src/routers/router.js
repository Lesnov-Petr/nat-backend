const express = require("express");
const router = express.Router();
const { wrapper } = require("../helpers");

const {
  getContacts,
  getContactByID,
  addContactNew,
  deleteContactByID,
} = require("../controllers");
const { addContactValidation } = require("../middlewares");

router
  .get("/", wrapper(getContacts))
  .get("/:id", wrapper(getContactByID))
  .post("/", addContactValidation, wrapper(addContactNew))
  .delete("/:id", wrapper(deleteContactByID));

module.exports = { contactsRouter: router };
