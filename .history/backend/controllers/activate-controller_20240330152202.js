class ActivateController {
  async activate(req, res) {
    const { name, avatar } = req.body;
    if (!name || !avatar) {
      return res.status(400).json({ message: "Name and avatar are required!" });
    }
    //Image Base64
    const buffer = Buffer.from(avatar.split(",")[1], "base64");
    res.json({ message: "User activated!" });
  }
}
module.exports = new ActivateController();