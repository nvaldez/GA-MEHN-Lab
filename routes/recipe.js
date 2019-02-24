const express = require("express");
const router = express.Router();
const controller = require("../controllers/index.js");

// router.get("/", controller.index);
router.get("/new", controller.new);
router.post("/new", controller.create);
router.get("/:id", controller.show);
router.put("/:id", controller.update);
router.delete("/:id", controller.delete);
router.get("/:id/edit", controller.edit);

module.exports = router;
