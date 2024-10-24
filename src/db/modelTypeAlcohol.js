const mongoose = require("mongoose");

const schemaTypeAlcohol = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  samples: {
    type: Object,
    required: true,
  },
});

const TypeAlcohol = mongoose.model("TypeAlcohol", schemaTypeAlcohol);

module.exports = { TypeAlcohol };
