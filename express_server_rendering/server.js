const express = require("express");
const todoRoute = require("./routes/todo");

const srv = express();

srv.use(express.json());
srv.use(express.urlencoded({ extended: true }));
srv.set("view engine", "hbs");
srv.set("views", __dirname + "/views");
srv.use("/todos", todoRoute);

srv.listen("4747");
