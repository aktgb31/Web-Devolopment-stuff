const express = require("express");
const path = require("path");
const app = express();
const { Center, Season, Course, Batch } = require("./model");

app.set("view engine", "hbs");
app.set("views", path.resolve(__dirname, "../batchCodeGen/views"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/batchcode", async (req, res) => {
  try {
    const centers = await Center.findAll();
    const seasons = await Season.findAll();
    const courses = await Course.findAll();
    const years = [2016, 2017, 2018, 2019, 2020, 2021];
    res.render("batchcode", { centers, seasons, courses, years });
  } catch (e) {
    console.error(e);
  }
});

app.post("/batchcode", async (req, res) => {
  let batchcode = "";
  batchcode += req.body.course;
  batchcode += req.body.center;
  batchcode += req.body.year.substr(2);

  try {
    const batch = await Batch.create({
      code: batchcode,
      year: req.body.year,
      courseID: req.body.course,
      centerID: req.body.center,
    });
    res.send(batch.code);
  } catch (e) {
    console.error(e);
  }
});

app.get("/batches", async (req, res) => {
  try {
    const batches = await Batch.findAll();
    console.log(batches);
    res.render("batches", { batches });
  } catch (e) {
    console.error(r);
  }
});
module.exports = {
  app,
};
