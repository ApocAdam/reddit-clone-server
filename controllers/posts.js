import Post from "../models/post.js";

function getPosts(req, res) {
  Post.find({}, (err, posts) => {
    if (err) return res.json({});
    let post_data = [];
    for (const p in posts) {
      post_data.push({ title: posts[p]["title"], author: posts[p]["author"] });
    }
    res.json({ posts: post_data });
  });
}

function getPost(req, res) {
  Post.findById(req.params.id, (err, post) => {
    if (err) return res.json({});
    res.json(post);
  });
}

export { getPosts, getPost };
