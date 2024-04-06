import mongoose from "mongoose";

function DbConnect() {
  const DB_URL = process.env.DB_URL;

  mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    userFindAndModify: false,
  });

  const db = mongoose.connection;
  db.on;
}
