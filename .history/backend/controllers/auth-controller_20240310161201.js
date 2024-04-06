const otpService = require("../services/otp-service");
const hashService = require("../services/hash-service");

class AuthController {
  async sendOtp(req, res) {
    const { phone } = req.body;
    if (!phone) {
      return res.status(400).json({ message: "Phone number is required" });
    }

    const otp = await otpService.generateOtp();

    const hash = await hashService.hashOtp(otp);

    res.json({ otp: otp });

    // otpService.sendBySms(phone, otp);
    // res.status(200).json({ message: "OTP sent successfully" });
  }
}

module.exports = new AuthController();
