import mongoose from "mongoose";

export interface OrganizationInput {
  name: string;
  licenseExpiryDate: Date;
  country: string;
  city: string;
  address: string;
  zipcode: string;
  logo: string;
}

export interface UserDocument extends OrganizationInput, mongoose.Document {
  createdAt: Date;
  updatedAt: Date;
}

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
