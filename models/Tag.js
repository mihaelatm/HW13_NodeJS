import mongoose from "mongoose";

const tagSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  articles: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "Article",
  },
});

export const Tag = mongoose.model("Tag", tagSchema);
