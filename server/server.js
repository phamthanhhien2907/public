const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
const connectDB = require("./src/configs/connectDB");
const initRoutes = require("./src/routes");
const { handleSocketEvents } = require("./src/controllers/timerController");
require("dotenv").config();
const PORT = process.env.PORT || 8000;
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    // origin: process.env.CLIENT_URL,
    origin: "*",
    // origin: "http://192.168.1.7:5173",

    methods: ["GET", "PUT", "POST", "DELETE"],
    credentials: true,
  })
);

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "PUT", "POST", "DELETE"],
  },
});
app.use((req, res, next) => {
  req.io = io; // <-- Thêm dòng này
  next();
});

connectDB();
initRoutes(app);
handleSocketEvents(io);

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
