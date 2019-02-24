const mongoose = require("../db/connection");

module.exports = {
  Recipe: mongoose.model("Recipe", require("./recipe")),
  User: mongoose.model("User", require("./user"))
};
