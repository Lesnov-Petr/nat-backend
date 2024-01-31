const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  number: {
    type: Number,
    required: true,
    unique: true,
  },

  userID: {
    type: String,
    required: true,
  },

  createAt: {
    type: Date,
    default: Date.now(),
  },
});

const Contacts = mongoose.model("Contacts", contactSchema);

module.exports = { Contacts };
