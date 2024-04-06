const UserModel = require("../models/user-model");

class UserService {
  async finduser(filter) {
    const user = await UserModel.findOne(filter);
  }
}

module.exports = new UserService();
