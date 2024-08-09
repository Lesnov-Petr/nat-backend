const mongoose = require("mongoose");

const contractSchema = new mongoose.Schema({
  typeCompany: {
    type: String,
    required: true,
  },
  typeResident: {
    type: String,
    required: true,
  },

  nameCompany: {
    type: String,
    required: true,
    unique: true,
  },

  inn: {
    type: Number,
    required: true,
    unique: true,
  },

  kpp: {
    type: Number,
    unique: true,
  },

  okpo: {
    type: Number,
    unique: true,
  },

  ogrn: {
    type: Number,
    unique: true,
  },

  adress: {
    type: String,
    unique: true,
  },

  phone: {
    type: Number,
  },

  mail: {
    type: String,
  },

  companyId: {
    type: String,
    unique: true,
    required: true,
  },

  createAt: {
    type: Date,
    default: Date.now(),
  },
});

const Contracts = mongoose.model("Contracts", contractSchema);

module.exports = { Contracts };
