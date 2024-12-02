import mongoose from "mongoose";

const publisherSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  location: {
    type: String,
    trim: true,
  },
});

export const Publisher = mongoose.model("Publisher", publisherSchema);
