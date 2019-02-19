const express = require("express");
const router = express.Router();
const controller = require("../controllers/index.js");

router.get("/", controller.index);
router.get("/new", controller.show);
router.post("/", controller.create); // form action goes to this endpoint to create a new Resource (recipes)

module.exports = router;
