const express = require("express");

const app = express();

app.get("/hello", (req, res) => {
  let name ='Guest'
  if(req.query.user){name=req.query.user}
  res.send("Hello World "+name);
});

app.use('/abc',express.static(__dirname+'/public'))

app.listen(4444, () => {
  console.log("server started on http://localhost:4444");
});
