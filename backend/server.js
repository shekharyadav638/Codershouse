require("dotenv").config();
const express = require("express");
const app = express();
const router = require("./routes");
const DbConnect = require("./database");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const server = require("http").createServer(app);
const ACTIONS = require("./actions");

const io = require("socket.io")(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    credentials: true,
  },
});

app.use(cookieParser());
const corsOptions = {
  credentials: true,
  origin: ["http://localhost:3000"],
};
app.use(cors(corsOptions));
app.use("/storage", express.static("storage"));

const PORT = process.env.PORT || 5500;
DbConnect();

app.use(express.json({ limit: "8mb" }));
app.use(router);
app.get("/", (req, res) => {
  res.send("Hello from Express JS");
});

// sockets
const socketUserMap = {};

io.on("connection", (socket) => {
  console.log("new connection", socket.id);

  socket.on(ACTIONS.JOIN, ({ roomId, user }) => {
    socketUserMap[socket.id] = user;
    const clients = Array.from(io.sockets.adapter.rooms.get(roomId) || []);
    clients.forEach((clientId) => {
      if (clientId !== socket.id) {
        io.to(clientId).emit(ACTIONS.ADD_PEER, {});
      }
    });
    socket.emit(ACTIONS.ADD_PEER, {});
    socket.join(roomId);
  });
});

server.listen(PORT, () => console.log(`Listening on port ${PORT}`));
