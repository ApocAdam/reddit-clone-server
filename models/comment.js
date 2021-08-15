import mongoose from "mongoose";
const { Schema } = mongoose;

const commentSchema = mongoose.Schema({
  body: { type: String, required: true },
});
