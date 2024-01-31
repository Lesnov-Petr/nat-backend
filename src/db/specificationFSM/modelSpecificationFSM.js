const mongoose = require("mongoose");

const specificationSchemaFSM = new mongoose.Schema({
  date: {
    type: String,
    required: true,
    unique: true,
  },
  order: {
    type: Number,
    required: true,
    unique: true,
  },

  factory: {
    type: String,
    required: true,
    unique: true,
  },

  viewAP: {
    type: String,
    required: true,
    unique: true,
  },

  viewFSM: {
    type: String,
    required: true,
    unique: true,
  },

  volumeProduct: {
    type: Number,
    required: true,
    unique: true,
  },

  degreeProduct: {
    type: Number,
    required: true,
    unique: true,
  },

  valueFSM: {
    type: Number,
    required: true,
    unique: true,
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
