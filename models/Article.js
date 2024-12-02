import mongoose from "mongoose";

const articleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  content: {
    type: String,
    required: true,
    trim: true,
  },
  tags: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "Tag",
  },
});
