module.exports = {
  index: function(req, res) {
    res.render("welcome");
  },

  show: function(req, res) {
    res.render("index", {
      name: req.body.name
    });
  }
};
