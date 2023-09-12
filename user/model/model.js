const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
  },
  address: {
    city: String,
    state: String,
    country: String,
  },
  company: {
    type: String,
  },
  role: {
    type: String,
    required: true,
    default: "customer",
  },
  status: {
    type: String,
    required: true,
    default: "unverified",
  },
  uid: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  photo: {
    type: String,
  },
});

module.exports = mongoose.model("UserSchema", UserSchema);
