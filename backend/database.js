const mongoose = require("mongoose");

function DbConnect() {
  console.log("coming here...", process.env.DB_URL);
  const DB_URL = process.env.DB_URL;
  mongoose.connect(DB_URL, {
    //useNewUrlParser: true,
  });

  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "connection Error:"));
  db.once("open", () => {
    console.log("Database connected");
  });
}

module.exports = DbConnect;
