import faker from "faker";
import Post from "../models/post.js";
import User from "../models/user.js";
import Comment from "../models/comment.js";
import mongoose from "mongoose";
import async from "async";

function createPosts() {
  for (let i = 0; i < 10; i++) {
    async.series(
      {
        one: function (callback) {
          setTimeout(function () {
            User.countDocuments().exec(function (err, count) {
              let random = Math.floor(Math.random() * count);
              User.findOne()
                .skip(random)
                .exec(function (err, result) {
                  callback(null, mongoose.Types.ObjectId(result._id));
                });
            });
          }, 200);
        },
        two: function (callback) {
          setTimeout(function () {
            let c = [];
            for (let i = 0; i < 3; i++) {
              Comment.countDocuments().exec(function (err, count) {
                let random = Math.floor(Math.random() * count);
                Comment.findOne()
                  .skip(random)
                  .exec(function (err, result) {
                    c.push(mongoose.Types.ObjectId(result._id));
                    if (c.length == 3) {
                      callback(null, c);
                    }
                  });
              });
            }
          }, 100);
        },
      },
      function (err, result) {
        console.log(result);
        let post = new Post({
          title: faker.lorem.sentence(),
          body: faker.lorem.paragraph() + faker.lorem.paragraph(),
          date: faker.date.past(),
          author: result.one,
          comments: result.two,
        });
        post.save();
      }
    );
  }
}

export default createPosts;
