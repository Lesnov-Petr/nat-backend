const { Contacts } = require("../db");
const { WrongParametersError } = require("../helpers");

const getContacts = async (userID) => {
  const contacts = await Contacts.find({ userID });
  return contacts;
};

const getContactByID = async (contactID, userID) => {
  const contact = await Contacts.findOne({ _id: contactID, userID });
  if (!contact) {
    throw new WrongParametersError(`Not found contacts with id ${id}`);
  }
  return contact;
};

const addContact = async ({ name, number }, userID) => {
  const contact = new Contacts({ name, number, userID });
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
