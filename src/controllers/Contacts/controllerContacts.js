const {
  getContacts,
  getContactByID,
} = require("../../services/contactsServices");

const getContactsController = async (req, res) => {
  const listContacts = await getContacts();
  res.json({ listContacts, status: "success" });
};

const getContactByIdController = async (req, res) => {
  const { id } = req.params;
  const contact = await getContactByID(id);
  if (!contact) {
    return res.status(404).json({ message: `contact with ${id} not find` });
  }
  res.json({ contact, status: "success" });
};

const addContactNewController = async (req, res) => {
  // const { name, number } = req.body;
  // const Contacts = await getCollectionContacts();
  // await Contacts.insert({ name: name, number: number });
  // res.json({ status: "success" });
};

const deleteContactByIdController = async (req, res) => {
  // const { id } = req.params;
  // const Contacts = await getCollectionContacts();
  // await Contacts.deleteOne({ _id: new ObjectId(id) });
  // res.json({ messege: `contact with id ${id} delete` });
};

module.exports = {
  getContactsController,
  getContactByIdController,
  addContactNewController,
  deleteContactByIdController,
};
