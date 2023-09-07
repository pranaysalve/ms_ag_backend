const mongoose = require("mongoose");

const ProductRateSchema = new mongoose.Schema({
  sku: {
    type: Object,
    required: true,
  },
  rate: {
    type: Number,
    required: true,
  },
  location: {
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

module.exports = mongoose.model("ProductRateSchema", ProductRateSchema);
