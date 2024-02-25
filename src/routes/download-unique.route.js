const express = require("express");
const controller = require("../controllers/download-unique.controller");
const router = express.Router();

router.get("/imprint/unique-subgroup/download-unique", controller.index);
router.post("/imprint/unique-subgroup/download-unique", controller.index);

module.exports = router;
