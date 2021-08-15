import createPosts from "./posts.js";
import createUsers from "./users.js";
import createComments from "./comments.js";

function populate() {
  createUsers();
  createPosts();
  createComments();
}

export default populate;
