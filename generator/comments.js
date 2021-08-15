import faker from "faker";
import Comment from "../models/comment.js";
import User from "../models/user.js";
import mongoose from "mongoose";
import async from "async";

function createComments() {
  for (let i = 0; i < 20; i++) {
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
      },
      function (err, result) {
        const comment = new Comment({
          body: faker.lorem.paragraph(),
          author: result.one,
        });
        comment.save();
      }
    );
  }
}

export default createComments;
