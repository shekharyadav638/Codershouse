class UserDto {
  id;
  phone;
  name;
  avatar;
  createdAt;
  activated;

  constructor(user) {
    this._id = user._id;
    this.phone = user.phone;
    this.name = user.name;
    this.avatar = user.avatar;
    this.createdAt = user.createdAt;
    this.activated = user.activated;
  }
}

module.exports = UserDto;
