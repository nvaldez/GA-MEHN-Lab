const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const Recipe = new Schema({
  title: String,
  description: String,
  direction: Array,
  ingredients: Array
});

module.exports = mongoose.model("Recipe", Recipe);
