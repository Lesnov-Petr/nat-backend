const { contactsRouter } = require("./routerContacts");
const { authRouter } = require("./authRouter");
const { specificationRouterFSM } = require("./specificationRouterFSM");
const { authUserRouter } = require("./authUserRouter");

module.exports = {
  contactsRouter,
  authRouter,
  specificationRouterFSM,
  authUserRouter,
};
