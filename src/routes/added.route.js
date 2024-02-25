const express = require("express");
const controller = require("../controllers/added.controller");
const router = express.Router();

router.get("/added", controller.index);
router.post("/added", controller.index);

module.exports = router;
