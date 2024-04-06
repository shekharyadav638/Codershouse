class AuthController {
  sendOtp(req, res) {
    const { phone } = req.body;
    if (!phone) {
      return res.status(400).json({ message: "Phone number is required" });
    }

    res.status(200).json({ message: "OTP sent successfully" });
  }
}

module.exports = new AuthController();
