module.exports = async function (req, res, next) {
  try {
    const { accessToken } = req.cookies;
    if (!accessToken) {
      throw new Error();
    }
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid token" });
  }
};
