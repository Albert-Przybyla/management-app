const mongoose = require("mongoose");

const organizationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  users: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  licenseExpiryDate: {
    type: Date,
    required: true,
  },
});

const Organization = mongoose.model("Organization", organizationSchema);
module.exports = Organization;
