const otpService = require("../services/otp-service");
const hashService = require("../services/hash-service");
const userService = require("../services/user-service");
const tokenService = require("../services/token-service");

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

  // verifying OTP
  async verifyOtp(req, res) {
    const { phone, hash, otp } = req.body;
    if (!phone || !hash || !otp) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const [hashedOtp, expires] = hash.split(".");
    const now = Date.now();
    if (now > +expires) {
      return res.status(400).json({ message: "OTP has expired" });
    }

    const data = `${phone}.${otp}.${expires}`;
    const isValid = otpService.verifyOtp(hashedOtp, data);
    if (!isValid) {
      return res.status(400).json({ message: "Invalid OTP" });
    }

    let user;
    try {
      user = await userService.findUser({ phone });
      if (!user) {
        user = userService.createUser({ phone });
      }
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "DB error" });
    }

    //Token generation
    const { accessToken, refreshToken } = tokenService.generateTokens();

    //saving refresh token
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      path: "/auth/refresh_token",
    });
  }
}

module.exports = new AuthController();
