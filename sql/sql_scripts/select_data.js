const mysql = require("mysql2");

// const insert = {
//   name: process.argv[2],
//   age: parseInt(process.argv[3]),
//   city: process.argv[4],
// };
const connection = mysql.createConnection({
  host: "localhost",
  database: "mytestdb",
  user: "dev1",
  password: "aktgb1",
});

connection.query(`SELECT * FROM persons`, function (err, results, fields) {
  if (err) console.error(err);
  else {
    console.log(results);
    console.log(fields);
    console.log("Inserted Successfully");
  }
  connection.close();
});
