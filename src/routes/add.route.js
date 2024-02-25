const express = require("express");
const controller = require("../controllers/add.controller");
const router = express.Router();

router.get("/add", controller.index);
router.post("/add", controller.index);

module.exports = router;
