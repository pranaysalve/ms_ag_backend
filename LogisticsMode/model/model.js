const mongoose = require("mongoose");

const LogisticsModeSchema = new mongoose.Schema({
  //Sea, Road, Air
  logisticMode: {
    type: String,
    required: true,
  },
  // Container, Truck, RefferVan
  logisticsType: {
    type: String,
    required: true,
  },
  //40 ft/ 12 tyre
  logisticSubType: {
    type: String,
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

module.exports = mongoose.model("LogisticsModeSchema", LogisticsModeSchema);
