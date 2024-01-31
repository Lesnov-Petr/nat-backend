const {
  getContacts,
  getContactByID,
  addContact,
  deleteContactById,
  updateContactBiId,
} = require("../../services");

const getContactsController = async (req, res) => {
  const { _id: userID } = req.user;

  const listContacts = await getContacts(userID);
  res.json({ listContacts, status: "success" });
};

const getContactByIdController = async (req, res) => {
  const { id: contactID } = req.params;
  const { _id: userID } = req.user;
  const contact = await getContactByID(contactID, userID);
  res.json({ contact, status: "success" });
};

const addContactNewController = async (req, res) => {
  const { name, number } = req.body;
  const { _id } = req.user;
  await addContact({ name, number }, _id);
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
