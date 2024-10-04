const { contactsRouter } = require("./routerContacts");
const { authRouter } = require("./authRouter");
const { stamps } = require("./stamps");
const { authUserRouter } = require("./authUserRouter");
const { contractsRouter } = require("./contractsRouter");

module.exports = {
  contactsRouter,
  authRouter,
  stamps,
  authUserRouter,
  contractsRouter,
};
