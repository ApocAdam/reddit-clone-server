import faker from "faker";
import userSchema from "../models/user.js";

function createUsers() {
  for (let i = 0; i < 5; i++) {
    const user = new userSchema({
      username: faker.internet.userName(),
      password: faker.internet.password(),
    });
    user.save();
  }
}

export default createUsers;
