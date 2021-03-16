const Sequelize = require("sequelize");

const db = new Sequelize("dev1", "dev1", "aktgb1", {
  host: "localhost",
  dialect: "mysql",
});

db.authenticate()
  .then(() => console.log("Connection worked"))
  .catch((err) => console.error(err));
