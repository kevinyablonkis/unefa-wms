const db = require("../../db/connection");
const conn = db.open();

const controller = {};

controller.index = (req, res) => {
  const darkMode = req.cookies.darkMode === "enabled";
  let contentForm = req.body || {};
  let contentFormType = Object.keys(contentForm).length;

  const searchQuery = (sql, params) => {
    conn.all(sql, params, (error, rows) => {
      if (error) {
        console.error(error.message);
        res.send(error.message);
      } else {
        res.render("search", { rows, contentFormType, darkMode });
      }
    });
  };

  if (contentFormType == 0) {
    res.render("search", { contentFormType, darkMode });
  } else {
    let sql = "";
    let params = [`${contentForm.valor}%`];

    if (contentForm.subgrupo === "true") {
      sql = "SELECT * FROM Product WHERE Code_Subgrupo LIKE ?";
      searchQuery(sql, params);
    } else if (contentForm.serial === "true") {
      sql = "SELECT * FROM Product WHERE Serial LIKE ?";
      searchQuery(sql, params);
    } else if (contentForm.description === "true") {
      sql = "SELECT * FROM Product WHERE Description LIKE ?";
      searchQuery(sql, params);
    } else {
      // Manejar otros casos inesperados
      res.send("Hubo un error. Verifica en la Consola o inspecciona el código.");
    }
  }
};

module.exports = controller;
