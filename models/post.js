import mongoose from "mongoose";
const { Schema } = mongoose;

const postSchema = new Schema({
  title: { type: String, required: true },
  body: { type: String, required: true },
  date: { type: Date, default: Date.now },
  author: { type: String },
  votes: Number,
  views: Number,
});

export default mongoose.model("Post", postSchema);
