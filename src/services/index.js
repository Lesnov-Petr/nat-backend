const {
  registration,
  login,
  loginManager,
  checkCurrentUser,
  logOutUser,
} = require("./authServices");
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
  openSpecificationFSM,
} = require("./servicesSpecificationFSM");

module.exports = {
  registration,
  login,
  loginManager,
  logOutUser,
  checkCurrentUser,
  getContacts,
  getContactByID,
  addContact,
  deleteContactById,
  updateContactBiId,
  getSpecificatonFSM,
  addSpecificationFSM,
  delSpecificationFSM,
  openSpecificationFSM,
};
