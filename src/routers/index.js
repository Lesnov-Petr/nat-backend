const { contactsRouter } = require("./routerContacts");
const { authRouter } = require("./authRouter");
const { specificationRouterFSM } = require("./specificationRouterFSM");
const { authUserRouter } = require("./authUserRouter");
const { contractsRouter } = require("./contractsRouter");

module.exports = {
  contactsRouter,
  authRouter,
  specificationRouterFSM,
  authUserRouter,
  contractsRouter,
};
