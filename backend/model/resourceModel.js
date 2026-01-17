

import mongoose from "mongoose";

const resourceSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
    },

    type: {
        type: String,
        enum: ["request", "offer"],
        required: true,
    },

    priority: {
        type: String,
        enum: ["low", "medium", "urgent"],
        default: "low",
    },

    // OPTIONAL IMAGE
    images: {
        type: [String], // array of image URLs
        default: [],
    },

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    location: { // geoJSON format 
        type: {
            type: String,
            enum: ["Point"],
            default: "Point",
        },
        coordinates: {
            type: [Number], // [lng, lat]
            required: true,
        },
    },

    status: {
        type: String,
        enum: ["available", "fulfilled"],
        default: "available",
    },
},
    { timestamps: true }
)

// Geo index (IMPORTANT for later)
resourceSchema.index({ location: "2dsphere" });

export default mongoose.model("Resource", resourceSchema)