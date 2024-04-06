const crypto = require("crypto");

const smsSid = process.env.TWILIO_SMS_SID;

class OtpService {
  async generateOtp() {
    const otp = crypto.randomInt(1000, 9999);
    return otp;
  }

  sendBySms() {}

  verifyOtp() {}
}

module.exports = new OtpService();
