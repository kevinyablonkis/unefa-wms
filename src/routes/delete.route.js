const express = require("express");
const controller = require("../controllers/delete.controller");
const router = express.Router();

router.get("/delete", controller.index);

module.exports = router;
