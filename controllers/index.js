const Recipe = require("../models/Recipe");

module.exports = {
  index: function(req, res) {
    Recipe.find({}).then(recipes => {
      console.log(recipes);
      res.render("welcome", { recipes });
    });
  },

  show: function(req, res) {
    res.render("add");
  },
  create: function(req, res) {
    Recipe.create({
      name: req.body.name,
      description: req.body.description,
      ingredients: req.body.ingredients,
      directions: req.body.directions
    });

    res.redirect("/");
    console.log(req.body);
  }
};
