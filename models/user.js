import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  // posts: [{ type: String, ref: "Post" }],
  // comments: [{ type: String, ref: "Comment" }],
});

export default mongoose.model("User", userSchema);
