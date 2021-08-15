import mongoose from "mongoose";
const { Schema } = mongoose;

const commentSchema = new Schema({
  body: { type: String, required: true },
  time: { type: Date, default: Date.now },
  author: { type: Schema.Types.ObjectId, ref: "User" },
});

export default mongoose.model("Comment", commentSchema);
