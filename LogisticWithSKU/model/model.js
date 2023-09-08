const mongoose = require("mongoose");

const LogisticsWithSKU = new mongoose.Schema({
  //Onion, Pome, Grapes
  sku: {
    type: Object,
    required: true,
  },
  // Road, Sea, Air - Truck, Container - 10Tyre, 12Tyre, 40ft, 20ft
  logisticsTypeDetails: {
    type: Object,
    required: true,
  },
  //29ton, 25ton, 30 ton, 26 ton, 20 ton 3300Boxes 2530 Boxess
  loadingCapacity: {
    type: Number,
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

module.exports = mongoose.model("LogisticsWithSKU", LogisticsWithSKU);
