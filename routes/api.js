import express from "express";
import createUsers from "../generator/users.js";
import createPosts from "../generator/posts.js";
const router = express.Router();

router.get("/test", (req, res) => {
  res.json({
    message: "hsefwefi",
  });
});

router.get("/populate", (req, res) => {
  createUsers();
  createPosts();
  res.json({
    message: "test",
  });
});

export default router;
