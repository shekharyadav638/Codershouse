const Jimp = require("jimp");
const path = require("path");

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
      const jimResp = await Jimp.read(buffer);
      jimResp
        .resize(150, Jimp.AUTO)
        .write(path.resolve(__dirname, "../storage/${imagePath}"));
    } catch (err) {
      return res.status(500).json({ message: "Could not process the image" });
    }
    res.json({ message: "User activated!" });
  }
}
module.exports = new ActivateController();
