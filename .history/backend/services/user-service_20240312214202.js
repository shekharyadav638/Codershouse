const UserModel = require("../models/user-model");

class UserService {
  async finduser(filter) {
    const user = await UserModel.findOne(filter);
  }

  async createUser(data) {
    const user = await UserModel.create(data);
    return user;
  }
}

module.exports = new UserService();
