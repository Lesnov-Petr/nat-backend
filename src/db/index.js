const { connectDB } = require("./conection");
const { Contacts } = require("./contacts/modelContact");
const {
  SpecificationFSM,
} = require("./specificationFSM/modelSpecificationFSM");
const { User } = require("./auth/modelUser");

module.exports = { connectDB, Contacts, User, SpecificationFSM };
