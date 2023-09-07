const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: true,
  },
  productVariety: {
    type: String,
    required: true,
  },
  productQuality: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  productIcon: { type: String, required: true },
  productImg: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
    default: "Not-Available",
  },
  availableQuantity: {
    qnty: [
      {
        type: String,
        required: true,
      },
    ],
  },
  createdBy: {
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
  },
});

module.exports = mongoose.model("ProductSchema", ProductSchema);
