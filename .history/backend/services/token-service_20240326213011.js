const jwt = require("jsonwebtoken");
const refreshModel = require("../models/refresh-model");
const accessTokenSecret = process.env.JWT_ACCESS_TOKEN;
const refreshTokenSecret = process.env.JWT_REFRESH_TOKEN;
const refreshModel = require("../models/refresh-model");

class TokenService {
  generateTokens(payload) {
    const accessToken = jwt.sign(payload, accessTokenSecret, {
      expiresIn: "30m",
    });

    const refreshToken = jwt.sign(payload, refreshTokenSecret, {
      expiresIn: "1y",
    });
    return { accessToken, refreshToken };
  }

  storeRefreshToken(token, userId) {
    try {
      refreshModel.create({ token, userId });
    } catch (err) {
      console.log(err);
    }
    //store in db
  }
}

module.exports = new TokenService();
