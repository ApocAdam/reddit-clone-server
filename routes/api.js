import express from "express";
import { getPosts, getPost } from "../controllers/posts.js";
import { getUser } from "../controllers/users.js";
import populate from "../generator/populate.js";

const router = express.Router();

router.get("/populate", (req, res) => {
  populate();
  res.send("working");
});

router.get("/posts", (req, res) => {
  getPosts(req, res);
});

router.get("/posts/:id", (req, res) => {
  getPost(req, res);
});

router.get("/user/:id", (req, res) => {
  getUser(req, res);
});

router.get("*", (req, res) => {
  res.status(404).send("Not found");
});

export default router;
