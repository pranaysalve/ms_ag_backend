const mongoose = require("mongoose");

const BillingSchema = new mongoose.Schema({
  booking: {
    type: Object,
    required: true,
  },
  billingAmount: {
    type: String,
    required: true,
  },
  paidAmount: {
    type: Number,
    required: true,
  },
  balance: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["Un-Paid", "Paid", "Partial-Paid"],
    default: "Un-Paid",
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

module.exports = mongoose.model("BillingSchema", BillingSchema);
