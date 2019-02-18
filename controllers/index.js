const Recipe = require("../models/Recipe");

module.exports = {
  index: function(req, res) {
    // res.render("welcome");
    Recipe.find({}).then(recipes => {
      res.render("welcome", { recipes });
    });
  },

  show: function(req, res) {
    res.render("index", {
      name: req.body.name
    });
  }
};
