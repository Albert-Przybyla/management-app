const mongoose = require("mongoose");

const organizationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
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
  country: {
    type: String,
    required: false,
  },
  city: {
    type: String,
    required: false,
  },
  address: {
    type: String,
    required: false,
  },
  zipcode: {
    type: String,
    required: false,
  },
  logo: {
    type: String,
    required: false,
  },
});

export default mongoose.model("Organization", organizationSchema);
