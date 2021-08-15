import Post from "../models/post.js";

function getPosts(req, res) {
  Post.find({}, (err, posts) => {
    if (err) return err;
    res.json(posts);
  });
}

// function getPost(req, res) {}

export default getPosts;
