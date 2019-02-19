const Recipe = require("../models/Recipe");

module.exports = {
  index: function(req, res) {
    Recipe.find({}).then(recipes => {
      res.render("welcome", { recipes });
    });
  },

  add: function(req, res) {
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
  },

  show: (req, res) => {
    Recipe.findOne({ _id: req.params.id }).then(recipe => {
      res.render("show", { recipe });
    });
  },

  delete: (req, res) => {
    Recipe.findByIdAndRemove(req.params.id).then(recipet => {
      res.redirect("/");
    });
  }
};
