const express = require("express");
const controller = require("../controllers/download-all.controller");
const router = express.Router();

router.get("/imprint/all-subgroup/download-all", controller.index);
router.post("/imprint/all-subgroup/download-all", controller.index);

module.exports = router;
