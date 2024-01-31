const { registration, login } = require("./authServices");
const {
  getContacts,
  getContactByID,
  addContact,
  deleteContactById,
  updateContactBiId,
} = require("./servicesContacts");

const {
  getSpecificatonFSM,
  addSpecificationFSM,
} = require("./servicesSpecificationFSM");

module.exports = {
  registration,
  login,
  getContacts,
  getContactByID,
  addContact,
  deleteContactById,
  updateContactBiId,
  getSpecificatonFSM,
  addSpecificationFSM,
};