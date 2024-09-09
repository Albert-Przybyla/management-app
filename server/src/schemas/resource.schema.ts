import mongoose from "mongoose";

export interface ResourceInput {
  name: string;
  quantity: number;
  price: number;
  description?: string;
  code?: string;
  organization: string;
}

export interface ResourceDocument extends ResourceInput, mongoose.Document {
  createdAt: Date;
  updatedAt: Date;
}

const resourceSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
    },
    code: {
      type: String,
    },
    quantity: {
      type: Number,
      required: true,
      min: 0,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    organization: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Organization",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

resourceSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
  },
});

export default mongoose.model("Resource", resourceSchema);
