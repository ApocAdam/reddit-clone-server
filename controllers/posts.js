import Post from "../models/post.js";

function getPosts(req, res) {
  Post.find({}, (err, posts) => {
    if (err) return err;
    res.json(posts);
  });
}

function getPost(req, res) {
  Post.findById(req.params.id, (err, post) => {
    if (err) return err;
    res.json(post);
  });
}

export { getPosts, getPost }
