const express = require("express");
const app = express();
app.set("view engine", "hbs");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/nef", (req, res) => {
  res.render("welcome");
});

app.post("/nef", (req, res) => {
  res.render("index", {
    name: req.body.name
  });
});

app.listen(4000, () => {
  console.log("app listening on port 4000");
});
