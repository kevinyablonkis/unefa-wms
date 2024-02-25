const db = require("../../db/connection");

const controller = {};

controller.index = (req, res) => {
  const darkMode = req.cookies.darkMode === "enabled";
  res.render("delete", { darkMode });
};

module.exports = controller;
