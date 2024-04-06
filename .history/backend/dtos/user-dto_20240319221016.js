class UserDto {
  _id;
  phone;
  createdAt;
  activated;

  constructor(user) {
    this._id = user._id;
    this.phone = user.phone;
    this.createdAt = user.createdAt;
    this.activated = user.activated;
  }
}
