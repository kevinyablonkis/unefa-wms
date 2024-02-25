const express = require("express");
const controller = require("../controllers/unique-subgroup.controller");
const router = express.Router();

router.get("/imprint/unique-subgroup", controller.index);

module.exports = router;
