const otpService = require("../services/otp-service");
const hashService = require("../services/hash-service");

class AuthController {
  async sendOtp(req, res) {
    const { phone } = req.body;
    if (!phone) {
      return res.status(400).json({ message: "Phone number is required" });
    }

    const otp = await otpService.generateOtp();

    //hashing
    const ttl = 2 * 60 * 1000; // 2min expiry time
    const expires = Date.now() + ttl;
    const data = `${phone}.${otp}.${expires}`;
    const hash = hashService.hashOtp(data);

    //sending otp
    try {
      await otpService.sendBySms(phone, otp);
      return res.json({
        hash: `${hash}.${expires}`,
        phone,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "message sending failed" });
    }
  }

  verifyOtp(req, res) {
    const { phone, hash, otp, expires } = req.body;
    if (!phone || !hash || !otp || !expires) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const now = Date.now();
    if (now > parseInt(expires)) {
      return res.status(400).json({ message: "OTP has expired" });
    }
    const data = `${phone}.${otp}.${expires}`;
    const newHash = hashService.hashOtp(data);
    if (newHash !== hash) {
      return res.status(400).json({ message: "Invalid OTP" });
    }
    res.json({ message: "OTP verified" });
  }
}

module.exports = new AuthController();
