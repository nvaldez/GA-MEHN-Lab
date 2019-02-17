const express = require("express");
const app = express();
app.set("view engine", "hbs");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
const router = require("./routes/index.js");

app.use(require("./routes/index.js"));

app.listen(4000, () => {
  console.log("app listening on port 4000");
});
