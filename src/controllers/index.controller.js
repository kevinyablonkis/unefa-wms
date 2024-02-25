const db = require("../../db/connection");
const conn = db.open();

const controller = {};

controller.index = (req, res) => {
  const darkMode = req.cookies.darkMode === "enabled";
  res.render("index", { darkMode });
};

module.exports = controller;
