import mongoose from "mongoose";

/**
 * Post schema — represents a single collaboration request.
 * Mongoose enforces these rules at the database layer, so invalid
 * data can never be saved even if a controller forgets to check.
 */
const postSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    trim: true,
    maxlength: [60, "Name must be under 60 characters"],
  },
  title: {
    type: String,
    required: [true, "Title is required"],
    trim: true,
    maxlength: [100, "Title must be under 100 characters"],
  },
  description: {
    type: String,
    required: [true, "Description is required"],
    trim: true,
    maxlength: [1000, "Description must be under 1000 characters"],
  },
  skills: {
    type: [String],
    required: [true, "At least one skill tag is required"],
    validate: {
      validator: (arr) => Array.isArray(arr) && arr.length > 0,
      message: "At least one skill tag is required",
    },
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Post", postSchema);
