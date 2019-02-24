const express = require("express");
const app = express();
const bodyParser = require("body-parser");
var mongo = require("mongodb").MongoClient;

const methodOverride = require("method-override");

const cookieParser = require("cookie-parser");
const flash = require("connect-flash");
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

app.set("view engine", "hbs");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(methodOverride("_method"));

app.use(cookieParser());
app.use(
  session({
    secret: "WDI 28 IS THE BEST",
    resave: false,
    saveUninitialized: false
  })
);

app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

const { User } = require("./models/index");
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req, res, next) {
  global.user = req.user;
  res.locals.user = req.user;
  next();
});

const url = "mongodb://localhost:27017/recipe";
app.use(require("./routes/index.js"));

app.listen(4000, () => {
  console.log("\napp listening on port 4000\n\n");
});
