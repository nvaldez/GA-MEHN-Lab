const express = require("express");
const router = express.Router();
const { Recipe } = require("../models/index");
const authenticatedUser = require("../utils/authenticatedUser");

router.get("/", authenticatedUser, function(req, res) {
  Recipe.find({}).then(recipes => {
    res.render("welcome", { recipes, success: req.flash("success") });
  });
});

router.use(require("./user"));

router.use("/recipe", authenticatedUser, require("./recipe.js"));

module.exports = router;
