const express = require("express");
const app = express();

app.set("view engine", "hbs");

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

const router = require("./routes/index.js");
app.use(require("./routes/index.js"));

var mongo = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017/recipe";

// mongo.connect(url, function(err, database) {
//   const db = database.db("recipe");
//   const collection = db.collection("recipes");
//   collection.find().toArray(function(err, docs) {
//     console.log(docs);
//   });
// });

app.listen(4000, () => {
  console.log("\napp listening on port 4000\n\n");
});
