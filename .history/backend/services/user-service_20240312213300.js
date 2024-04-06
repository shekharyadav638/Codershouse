const userModel = require("../models/user-model");

class UserService {
  async finduser() {
    const user = await userModel.find();
  }
}

module.exports = new UserService();
