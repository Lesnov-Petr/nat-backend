const { registration, login, loginManager } = require("./authServices");
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
  delSpecificationFSM,
} = require("./servicesSpecificationFSM");

module.exports = {
  registration,
  login,
  loginManager,
  getContacts,
  getContactByID,
  addContact,
  deleteContactById,
  updateContactBiId,
  getSpecificatonFSM,
  addSpecificationFSM,
  delSpecificationFSM,
};
