const express = require("express");
const http = require("http");
const app = express();
const socketio = require("socket.io");

const server = http.createServer(app);
const io = socketio(server);

let users = {};
let socketMap = {};

io.on("connection", (socket) => {
  console.log("connected with socket id=", socket.id);

  function login(s, u) {
    s.join(u);
    s.emit("logged_in");
    socketMap[s.id] = u;
  }

  socket.on("login", (data) => {
    if (users[data.username]) {
      if (users[data.username] == data.password) {
        login(socket, data.username);
      } else {
        socket.emit("login_failed");
      }
    } else {
      users[data.username] = data.password;
      login(socket, data.username);
    }
  });

  socket.on("msg_send", (data) => {
    data.from = socketMap[socket.id];
    if (data.to) {
      io.to(data.to).emit("msg_received", data);
    } else {
      socket.broadcast.emit("msg_received", data);
    }
  });
});
app.use("/", express.static(__dirname + "/public"));

server.listen(4444, () => {
  console.log("STarted on http://localhost:4444");
});
