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
  getStamps,
  addStamps,
  delStamps,
  openStams,
} = require("./servicesStamps");

const {
  addContracts,
  delCounterparty,
  getListCounterparty,
  getCounterparty,
  searchContracts,
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
  getStamps,
  addStamps,
  delStamps,
  openStams,
  addContracts,
  delCounterparty,
  getListCounterparty,
  getCounterparty,
  searchContracts,
};
