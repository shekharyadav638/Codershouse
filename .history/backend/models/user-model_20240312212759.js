const mongoose = require("mongoose");
const schema = mongoose.Schema;

const userSchema = new Schema({
  phone: { type: String, required: true },
  activated: { type: Boolean, default: false },
});
