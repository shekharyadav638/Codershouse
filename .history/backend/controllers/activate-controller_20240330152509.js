const Jimp = require("jimp");

class ActivateController {
  async activate(req, res) {
    const { name, avatar } = req.body;
    if (!name || !avatar) {
      return res.status(400).json({ message: "Name and avatar are required!" });
    }
    //Image Base64
    const buffer = Buffer.from(
      avatar.replace(/^data:image\/png;base64,/, ""),
      "base64"
    );

    try {
    } catch (err) {
      return res.status(500).json({ message: "Something went wrong!" });
    }
    res.json({ message: "User activated!" });
  }
}
module.exports = new ActivateController();
