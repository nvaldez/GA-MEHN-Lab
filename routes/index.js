const express = require("express");
const router = express.Router();
const controller = require("../controllers/index.js");

router.get("/", controller.index);
router.get("/new", controller.add);
router.post("/", controller.create);
router.get("/:id", controller.show);
router.delete("/:id", controller.delete);
// router.delete("/:id", controller.show);
router.put("/:id/edit", controller.edit);

module.exports = router;
