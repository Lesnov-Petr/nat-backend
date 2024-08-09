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
  },

  okpo: {
    type: Number,
  },

  ogrn: {
    type: Number,
  },

  adress: {
    type: String,
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
