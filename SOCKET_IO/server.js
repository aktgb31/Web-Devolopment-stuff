const express = require("express");
const http = require("http");
const app = express();
const socketio = require("socket.io");

const server = http.createServer(app);
const io = socketio(server);

io.on("connection", (socket) => {
  console.log("connected with socket id=", socket.id);
});
app.use("/", express.static(__dirname + "/public"));

server.listen(4444, () => {
  console.log("STarted on http://localhost:4444");
});
