const db = require("../../db/connection");
const conn = db.open();

const controller = {};

controller.index = (req, res) => {
  const darkMode = req.cookies.darkMode === "enabled";
  let contentForm = req.body;

  let sql = "DELETE FROM Product WHERE Serial = ?";

  conn.run(sql, [contentForm.deleteSerial], (error, rows) => {
    if (error) {
      console.error(error.message);
      res.send(error.message);
    } else {
      res.render("deleted", { darkMode });
    }
  });
};

module.exports = controller;
