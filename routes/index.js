const express = require("express");
const router = express.Router();
const todoController = require("../controllers/index.js");

router.get("/", todoController.index);
router.post("/", todoController.show);

module.exports = router;
