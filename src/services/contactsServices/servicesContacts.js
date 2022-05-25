const { model } = require("mongoose");
const { Contacts } = require("../../db");

const getContacts = async () => {
  const contacts = await Contacts.find({});
  return contacts;
};

const getContactByID = (id) => {
  const contact = Contacts.findById(id);
  return contact;
};

module.exports = { getContacts, getContactByID };
