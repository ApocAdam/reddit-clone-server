import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  bio: String,
  posts: {},
  comments: {},
});

export default mongoose.model("User", userSchema);
