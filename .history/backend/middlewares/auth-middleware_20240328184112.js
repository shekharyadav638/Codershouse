module.exports = async function (req, res, next) {
  try {
    if (!req.headers.authorization) {
      return res
        .status(401)
        .json({ message: "Authorization header is required" });
    }
    const token = req.headers.authorization.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "Token is required" });
    }
    const user = await jwt.verify(token, process.env.JWT_SECRET);
    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};
