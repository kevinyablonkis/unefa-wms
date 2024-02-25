const express = require("express");
const controller = require("../controllers/index.controller");
const router = express.Router();

router.get("/", controller.index);
router.post("/", controller.index);

module.exports = router;
