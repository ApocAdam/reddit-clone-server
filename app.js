import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import router from "./routes/api.js";

dotenv.config();

const app = express();
const port = 3000;

mongoose.connect(process.env.DB_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("Connected to DB");
});

app.get("/", (req, res) => res.send("This is the reddit clone api"));

app.use("/api", router);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
