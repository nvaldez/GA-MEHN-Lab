const Recipe = require("../models/Recipe");

module.exports = {
  index: function(req, res) {
    Recipe.find({}).then(recipes => {
      res.render("welcome", { recipes });
    });
  },

  edit: (req, res) => {
    Recipe.findOne({ _id: req.params.id }).then(recipe => {
      res.render("edit", { recipe });
    });
  },
  update: (req, res) => {
    Recipe.findOne({ _id: req.params.id }).then(recipe => {
      recipe.name = req.body.name;
      recipe.description = req.body.description;
      recipe.ingredients = req.body.ingredients;
      recipe.directions = req.body.directions;

      recipe.save(err => {
        res.redirect(`/${req.params.id}`);
      });
    });
  },
  // update
  //      - PUT request, take body (i.e. form) and update DB

  // should be 'new'
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
    // console.log("working");

    Recipe.findByIdAndRemove(req.params.id).then(recipe => {
      res.redirect("/");
    });
  }
};
