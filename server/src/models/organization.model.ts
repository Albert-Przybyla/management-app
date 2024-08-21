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
});

export default mongoose.model("Organization", organizationSchema);
