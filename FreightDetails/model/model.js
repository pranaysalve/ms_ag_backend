const mongoose = require("mongoose");

const FreightDetails = new mongoose.Schema({
  LogisticDetails: [
    {
      type: Object,
      required: true,
    },
  ],
  Freight: {
    type: Object,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  createdBy: {
    type: Object,
    required: true,
  },
  uid: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("FreightDetails", FreightDetails);
