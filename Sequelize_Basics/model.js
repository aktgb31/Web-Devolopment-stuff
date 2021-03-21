const { STRING } = require("sequelize");
const Sequelize = require("sequelize");
const DataTypes = Sequelize.DataTypes;

const db = new Sequelize("mytestdb", "dev1", "aktgb1", {
  host: "localhost",
  dialect: "mysql",
});

const Student = db.define("student", {
  name: DataTypes.STRING(40),
  age: DataTypes.INTEGER(4),
  class: DataTypes.STRING(20),
});

module.exports = {
  db,
  Student,
};
