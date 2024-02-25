const controller = {};

controller.index = (req, res) => {
  const darkMode = req.cookies.darkMode === "enabled";
  res.render("add", { darkMode });
};

module.exports = controller;
