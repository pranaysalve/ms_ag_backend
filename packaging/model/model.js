const mongoose = require("mongoose");

const PackagingSchema = new mongoose.Schema({
  //Bag, Box, Pallet, Loose, Wooden Box
  packagingType: {
    type: String,
    required: true,
  },
  packagingSubType: {
    type: String,
    required: true,
  },
  //Kg, Litre, Gram
  primaryUnit: {
    type: String,
    required: true,
  },
  //Box, Pallet, Bottle
  secondaryUnit: {
    type: String,
    required: true,
  },
  packagingNetwt: {
    type: Number,
    required: true,
  },
  packagingGrwt: {
    type: Number,
    required: true,
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

module.exports = mongoose.model("PackagingSchema", PackagingSchema);
