class activateController {
  async activate(req, res) {
    const { name, avatar } = req.body;
    console.log(name, avatar);
    res.json({ message: "User activated!" });
  }
}

module.exports = new activateController();
