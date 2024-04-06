class UserDto {
  _id;
  phone;
  createdAt;
  activated;

  constructor(model) {
    this._id = model._id;
    this.phone = model.phone;
    this.createdAt = model.createdAt;
    this.activated = model.activated;
  }
}
