const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  // BASIC INFO
  firstName: { type: String, required: true },
  middleName: String,
  lastName: { type: String, required: true },

  // CONTACT
  contact_no: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  
  // AUTH
  password: { type: String, required: true },

  // ADDRESS
  address: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  country: { type: String, required: true },
  zip: { type: String, required: true },
  landmark: String,

  // ROLE SYSTEM
  role: {
    type: String,
    enum: ["Client", "Professional", "Contractor", "Supplier", "Service"],
    required: true
  },

  // CLIENT
  clientType: String,

  // PROFESSIONAL / BUSINESS
  workMode: String,
  businessName: String,
  websiteLink: String,

}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);