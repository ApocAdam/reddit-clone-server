import Post from "../models/post.js";
import User from "../models/user.js";
import Comment from "../models/comment.js";
import async from "async";

function getUser(req, res) {
  User.findById(req.params.id, (err, user) => {
    if (err) return res.json({});

    async.parallel(
      {
        userPosts: function (callback) {
          Post.find({ author: req.params.id }, function (err, raw_posts) {
            let post_data = [];
            for (const p in raw_posts) {
              post_data.push({ title: raw_posts[p]["title"] });
            }
            callback(null, post_data);
          });
        },
        userComments: function (callback) {
          Comment.find({ author: req.params.id }, function (err, raw_comments) {
            let comment_data = [];
            for (const c in raw_comments) {
              comment_data.push({ body: raw_comments[c]["body"] });
            }
            callback(null, comment_data);
          });
        },
      },
      function (err, results) {
        console.log(results);
        if (err) return err;
        res.json({
          username: user.username,
          posts: results["userPosts"],
          comments: results["userComments"],
        });
      }
    );
  });
}

export { getUser };
