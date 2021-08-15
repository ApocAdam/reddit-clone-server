import faker from "faker";
import postSchema from "../models/post.js";

function createPosts() {
  for (let i = 0; i < 10; i++) {
    const post = new postSchema({
      title: faker.lorem.sentence(),
      body: faker.lorem.paragraph(),
      date: faker.date.past(),
    });
    post.save();
  }
}

export default createPosts;
