const mongoose = require("mongoose");

const specificationSchemaFSM = new mongoose.Schema({
  order: {
    type: Number,
    required: true,
  },

  date: {
    type: String,
    required: true,
  },

  factory: {
    type: String,
    required: true,
  },

  viewAP: {
    type: String,
    required: true,
  },

  viewFSM: {
    type: String,
    required: true,
  },

  volumeProduct: {
    type: Number,
    required: true,
  },

  degreeProduct: {
    type: Number,
    required: true,
  },

  valueFSM: {
    type: Number,
    required: true,
  },

  companyId: {
    type: String,
    required: true,
  },
  manager: {
    type: Object,
    require: true,
  },

  createAt: {
    type: Date,
    default: Date.now(),
  },
});

const SpecificationFSM = mongoose.model(
  "SpecificationFSM",
  specificationSchemaFSM
);

module.exports = { SpecificationFSM };
