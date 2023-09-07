const mongoose = require("mongoose");

const Freight = new mongoose.Schema({
  terminalHandlingCharges: {
    type: String,
  },
  terminalHandlingCharges_gst: {
    type: String,
  },
  terminalHandlingCharges_gst_value: {
    type: String,
  },
  finalTerminalCharges: {
    type: String,
  },
  documentationFees: {
    type: String,
  },
  documentationFees_gst: {
    type: String,
  },
  documentationFees_gst_value: {
    type: String,
  },
  finalDocumentationFees: {
    type: String,
  },
  tempratureVariationCharges: {
    type: String,
  },
  tempratureVariationCharges_gst: {
    type: String,
  },
  tempratureVariationCharges_gst_value: {
    type: String,
  },
  finalTempratureVariationCharges: {
    type: String,
  },
  tollCharges: {
    type: String,
  },
  tollCharges_gst: {
    type: String,
  },
  tollCharges_gst_value: {
    type: String,
  },
  finalTollCharges: {
    type: String,
  },
  mandatoryUserCharges: {
    type: String,
  },
  mandatoryUserCharges_gst: {
    type: String,
  },
  mandatoryUserCharges_gst_value: {
    type: String,
  },
  finalMandatoryUserCharges: {
    type: String,
  },
  surrenderCharges: {
    type: String,
  },
  surrenderCharges_gst: {
    type: String,
  },
  surrenderCharges_gst_value: {
    type: String,
  },
  finalSurrenderCharges: {
    type: String,
  },
  containerSealCharges: {
    type: String,
  },
  containerSealCharges_gst: {
    type: String,
  },
  containerSealCharges_gst_value: {
    type: String,
  },
  finalContainerSealCharges: {
    type: String,
  },
  transportationCharges: {
    type: String,
  },
  transportationCharges_gst: {
    type: String,
  },
  transportationCharges_gst_value: {
    type: String,
  },
  finalTransportaionCharges: {
    type: String,
  },
  weightmentCharges: {
    type: String,
  },
  weightmentCharges_gst: {
    type: String,
  },
  weightmentCharges_gst_value: {
    type: String,
  },
  finalWeightmentCharges: {
    type: String,
  },
  customClearanceCharges: {
    type: String,
  },
  customClearanceCharges_gst: {
    type: String,
  },
  customClearanceCharges_gst_value: {
    type: String,
  },
  finalCustomeClearanceCharges: {
    type: String,
  },
  insuranceCharges: {
    type: String,
  },
  insuranceCharges_gst: {
    type: String,
  },
  insuranceCharges_gst_value: {
    type: String,
  },
  finalInsuranceCharges: {
    type: String,
  },
  labCharges: {
    type: String,
  },
  labCharges_gst: {
    type: String,
  },
  labCharges_gst_value: {
    type: String,
  },
  finalLabCharges: {
    type: String,
  },
  courierCharges: {
    type: String,
  },
  courierCharges_gst: {
    type: String,
  },
  courierCharges_gst_value: {
    type: String,
  },
  finalCourierCharges: {
    type: String,
  },
  basicOceanFreight: {
    type: String,
  },
  basicOceanFreight_gst: {
    type: String,
  },
  basicOceanFreight_gst_value: {
    type: String,
  },
  finalBasicOceanFreight: {
    type: String,
  },
  totalCharges: {
    type: String,
  },
  totalGstCharges: {
    type: String,
  },
  finalCharges: {
    type: String,
  },
  source: {
    type: Object,
    required: true,
  },
  destination: {
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

module.exports = mongoose.model("Freight", Freight);
