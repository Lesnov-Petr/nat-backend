const { model } = require("mongoose");
const { Contacts } = require("../../db");
const { WrongParametersError } = require("../../helpers");

const getContacts = async () => {
  const contacts = await Contacts.find({});
  return contacts;
};

const getContactByID = async (id) => {
  const contact = await Contacts.findById(id);
  if (!contact) {
    throw new WrongParametersError(`Not found contacts with id ${id}`);
  }
  return contact;
};

const addContact = async ({ name, number }) => {
  const contact = new Contacts({ name, number });
  await contact.save();
};

const deleteContactById = async (id) => {
  await Contacts.findByIdAndRemove(id);
};

const updateContactBiId = async (id, { name, number }) => {
  await Contacts.findByIdAndUpdate(id, { $set: { name, number } });
};

module.exports = {
  getContacts,
  getContactByID,
  addContact,
  deleteContactById,
  updateContactBiId,
};
