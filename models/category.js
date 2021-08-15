import mongoose from "mongoose";
const { Schema } = mongoose;

const categorySchema = new Schema({
  name: { Type: String },
});

export default mongoose.model("Category", categorySchema);
