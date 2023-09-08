const mongoose = require("mongoose");

const LedgerSchema = new mongoose.Schema({
  debitAmount: {
    type: Number,
    required: true,
  },
  debitDescription: {
    type: String,
    required: true,
  },
  creditAmount: {
    type: Number,
    required: true,
  },
  creditDescription: {
    type: String,
    required: true,
  },
  createdBy: {
    type: Object,
    required: true,
  },
  createdFor: {
    type: Object,
    required: true,
  },
  uid: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    required: true,
  },
});

module.exports = mongoose.model("LedgerSchema", LedgerSchema);
