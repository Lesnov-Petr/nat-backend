const mongoose = require("mongoose");

const specificationSchemaFSM = new mongoose.Schema({
  date: {
    type: String,
    required: true,
  },
  order: {
    type: Number,
    required: true,
    unique: true,
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
