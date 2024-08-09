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

const {
  addContracts,
  delCounterparty,
  getCounterparty,
} = require("./servicesContracts");

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
  addContracts,
  delCounterparty,
  getCounterparty,
};
