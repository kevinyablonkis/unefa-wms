const express = require("express");
const controller = require("../controllers/deleted.controller");
const router = express.Router();

router.get("/deleted", controller.index);
router.post("/deleted", controller.index);

module.exports = router;
