module.exports = async function (req, res, next) {
  try {
    const { accessToken } = req.cookies.authorization.split(" ")[1];
  } catch (error) {}
  next();
};
