const {
  getContacts,
  getContactByID,
  addContact,
  deleteContactById,
  updateContactBiId,
} = require("../../services/contactsServices");

const getContactsController = async (req, res) => {
  const listContacts = await getContacts();
  res.json({ listContacts, status: "success" });
};

const getContactByIdController = async (req, res) => {
  const { id } = req.params;
  const contact = await getContactByID(id);
  res.json({ contact, status: "success" });
};

const addContactNewController = async (req, res) => {
  const { name, number } = req.body;
  await addContact({ name, number });
  res.json({ status: "success" });
};

const deleteContactByIdController = async (req, res) => {
  const { id } = req.params;
  await deleteContactById(id);
  res.json({ message: `contact with id ${id} delete` });
};

const updateContactBiIdController = async (req, res) => {
  const { id } = req.params;
  const { name, number } = req.body;
  await updateContactBiId(id, { name, number });
  res.json({ message: `Contact with id ${id} update` });
};

module.exports = {
  getContactsController,
  getContactByIdController,
  addContactNewController,
  deleteContactByIdController,
  updateContactBiIdController,
};
