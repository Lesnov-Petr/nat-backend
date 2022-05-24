const { getCollectionContacts } = require("../db/contacts");
const { ObjectId } = require("mongodb");

const getContacts = async (req, res) => {
  const Contacts = await getCollectionContacts();
  const listContacts = await Contacts.find({}).toArray();
  res.json({ listContacts, status: "success" });
};

const getContactByID = async (req, res) => {
  const { id } = req.params;
  const Contacts = await getCollectionContacts();
  const contact = await Contacts.findOne({ _id: new ObjectId(id) });
  if (!contact) {
    return res.status(404).json({ message: `contact with ${id} not find` });
  }
  res.json({ contact, status: "success" });
};

const addContactNew = async (req, res) => {
  const { name, number } = req.body;
  const Contacts = await getCollectionContacts();
  await Contacts.insert({ name: name, number: number });
  res.json({ status: "success" });
};

const deleteContactByID = async (req, res) => {
  const { id } = req.params;
  const Contacts = await getCollectionContacts();
  await Contacts.deleteOne({ _id: new ObjectId(id) });
  res.json({ messege: `contact with id ${id} delete` });
};

module.exports = {
  getContacts,
  getContactByID,
  addContactNew,
  deleteContactByID,
};
