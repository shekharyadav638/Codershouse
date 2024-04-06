class ActivateController {
  async activate(req, res) {
    res.json({ message: "User activated!" });
  }
}

module.exports = new ActivateController();
