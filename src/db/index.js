const { connectDB } = require("./conection");
const { Contacts } = require("./modelContact");
const { SpecificationFSM } = require("./modelSpecificationFSM");
const { User } = require("./modelUser");
const { Company } = require("./modelCompany");
const { Contracts } = require("./modelContract");
const { TypeAlcohol } = require("./modelTypeAlcohol");

module.exports = {
  connectDB,
  Company,
  Contacts,
  User,
  SpecificationFSM,
  Contracts,
  TypeAlcohol,
};
