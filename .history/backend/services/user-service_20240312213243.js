class UserService {
  async finduser() {
    const user = await User.find();
  }
}

module.exports = new UserService();
