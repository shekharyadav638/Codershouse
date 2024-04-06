const crypto = require("crypto");

class HashService {
  hashOtp(data) {
    crypto
      .createHmac("sha256", process.env.HASH_SECRET)
      .update(data)
      .digest("hex");
  }
}

module.exports = new HashService();
