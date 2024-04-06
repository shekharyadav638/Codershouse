module.exports = async function (req, res, next) {
  try {
    const { accessToken } = req.cookies;
    if (!accessToken) {
      throw new Error();
    }
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  next();
};
