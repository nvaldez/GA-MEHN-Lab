const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const Recipe = new Schema({
  name: String,
  description: String,
  directions: Array,
  ingredients: Array
});

module.exports = mongoose.model("Recipe", Recipe);
