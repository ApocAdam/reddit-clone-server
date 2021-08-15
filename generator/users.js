import faker from "faker";
import User from "../models/user.js";

function createUsers() {
  for (let i = 0; i < 5; i++) {
    const user = new User({
      username: faker.internet.userName(),
      password: faker.internet.password(),
    });
    user.save();
  }
}

export default createUsers;
