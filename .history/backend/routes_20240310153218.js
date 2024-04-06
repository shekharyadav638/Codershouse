const router = require("express").Router();
const { register, activate, login } = require("./controllers/auth.controller");
const { requireSignin } = require("./middlewares");

router.post("/api/send-otp", (req, res) => {
  res.send("Hello from OTP route");
});

module.exports = router;
