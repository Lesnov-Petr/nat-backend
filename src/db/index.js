const { connectDB } = require("./conection");
const { Contacts } = require("./modelContact");
const { SpecificationFSM } = require("./modelSpecificationFSM");
const { User } = require("./modelUser");
const { Company } = require("./modelCompany");

module.exports = { connectDB, Company, Contacts, User, SpecificationFSM };
