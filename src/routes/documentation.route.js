const express = require("express");
const controller = require("../controllers/documentation.controller");
const router = express.Router();

router.get("/documentation", controller.index);

module.exports = router;
