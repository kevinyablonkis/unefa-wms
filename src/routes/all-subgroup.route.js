const express = require("express");
const controller = require("../controllers/all-subgroup.controller");
const router = express.Router();

router.get("/imprint/all-subgroup", controller.index);

module.exports = router;
