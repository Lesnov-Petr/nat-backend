const { addContactValidation } = require("./middlewareContacts");
const { middlewareAuth } = require("./middlewareAuth");
const { middlewareRoles } = require("./middlewareRoles");

module.exports = { addContactValidation, middlewareAuth, middlewareRoles };
