const { conectionContacts } = require("./conection");

const getCollectionContacts = async () => {
  const db = await conectionContacts();
  const Contacts = db.collection("contacts");
  return Contacts;
};

module.exports = { getCollectionContacts };
