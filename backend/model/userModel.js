import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },

    password: {
      type: String,
      required: true,
    },

    // User Location
    location: {
      type: {
        type: String,
        enum: ["Point"],
        required: true,
      },
      coordinates: {
        type: [Number], // [lng, lat]
        required: true,
      },
    },

    locationUpdatedAt: {
      type: Date,
      default: Date.now,
    },

    // Trust
    rating: {
      type: Number,
      default: 0,
    },

    totalHelps: {
      type: Number,
      default: 0,
    },

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

// index for geo queries
userSchema.index({ location: "2dsphere" });

export default mongoose.model("User", userSchema);
