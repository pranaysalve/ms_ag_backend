const mongoose = require("mongoose");

const SkuSchema = new mongoose.Schema({
  product: {
    type: Object,
    required: true,
  },
  packaging: {
    type: Object,
    required: true,
  },
  createdBy: {
    type: Object,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  uid: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("SkuSchema", SkuSchema);
