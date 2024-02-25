const express = require("express");
const controller = require("../controllers/imprint.controller");
const router = express.Router();

router.get("/imprint", controller.index);
router.post("/imprint", controller.index);

module.exports = router;
