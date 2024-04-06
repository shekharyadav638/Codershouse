const UserModel = require("../models/user-model");

class UserService {
  async finduser() {
    const user = await UserModel.find();
  }
}

module.exports = new UserService();
