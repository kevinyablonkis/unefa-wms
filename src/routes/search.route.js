const express = require("express");
const controller = require("../controllers/search.controller");
const router = express.Router();

router.get("/search", controller.index);

router.post("/search", controller.index);

module.exports = router;
