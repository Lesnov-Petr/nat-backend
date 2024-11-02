const mongoose = require("mongoose");

const specificationSchemaFSM = new mongoose.Schema({
  name: {
    type: Number,
    required: true,
  },

  date: {
    type: String,
    required: true,
  },

  factory: {
    type: Object,
    required: true,
  },

  viewAP: {
    type: Object,
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

  numInvoice: {
    type: String,
  },

  dateInvoice: {
    type: Date,
  },

  dateDelivery: {
    type: Date,
  },

  dateEnd: {
    type: Date,
  },

  dateSend: {
    type: Date,
  },

  dateDeliveryProducts: {
    type: Date,
  },

  planDeliveryProducts: {
    type: Date,
  },

  statusFSM: {
    type: String,
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
