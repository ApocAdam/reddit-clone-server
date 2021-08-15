import mongoose from "mongoose";
const { Schema } = mongoose;

const postSchema = new Schema({
  title: { type: String, required: true },
  body: { type: String, required: true },
  date: { type: Date, default: Date.now },
  author: { type: Schema.Types.ObjectId, ref: "User" },
  comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
  votes: Number,
  views: Number,
});

export default mongoose.model("Post", postSchema);
