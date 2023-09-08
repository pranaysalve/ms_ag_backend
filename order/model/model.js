const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  sku: {
    type: Object,
    required: true,
  },
  fees: {
    type: Number,
  },
  rate: {
    type: Object,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  totalProductCost: {
    type: Number,
    required: true,
  },

  //freight details
  freight: {
    type: Object,
    ref: "freightDetailsSchema",
  },
  source: {
    type: String,
  },
  destination: {
    type: String,
  },
  totalFreightCost: {
    type: Number,
    required: true,
  },
  totalProductAndFreightCost: {
    type: Number,
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
  createdFor: {
    type: Object,
    required: true,
  },
  bookingStatus: {
    type: String,
    enum: [
      "Booked",
      "Cancelled",
      "Processing",
      "Dispatch",
      "Delivered",
      "In Transit",
    ],
    default: "Booked",
  },
  dispatchDate: {
    type: Date,
  },
  deliverDate: {
    type: Date,
  },
  uid: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("OrderSchema", OrderSchema);
