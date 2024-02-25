const db = require("../../db/connection");
const { exec } = require("child_process");
const fs = require("fs");
const path = require("path");
const conn = db.open();

const controller = {};

controller.index = (req, res) => {
  let contentForm = req.body || {};

  const searchQuery = (sql, params) => {
    return conn.all(sql, params, (error, rows) => {
      if (error) {
        console.error(error.message);
      } else {
        const filePathProducts = path.join(__dirname,
          "../../create-excel/json/data-products.json"
        );
        const jsonDataProducts = JSON.stringify(rows);

        fs.writeFile(filePathProducts, jsonDataProducts, (error) => {
          if (error) {
            console.error(error.message);
            res.send(error.message);
          } else {
            console.log("Archivo JSON de productos creado con éxito");
          }
        });
      }
    });
  };

  let params = [`${contentForm.subgroup}`];
  let sql = "SELECT * FROM Product WHERE Code_Subgrupo = ?";

  let result = searchQuery(sql, params);

  const filePathPersonal = path.join(__dirname,"../../create-excel/json/data-personal.json");
  const jsonDataPersonal = JSON.stringify(contentForm);

  fs.writeFile(filePathPersonal, jsonDataPersonal, (error) => {
    if (error) {
      console.error(error.message);
      res.send(error.message);
    } else {
      console.log("Archivo JSON de datos personales creado con éxito");
    }
  });

  const comandoPython = "python ../create-excel/main.py";

  exec(comandoPython, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error al ejecutar el comando: ${error}`);
    }
    const file = fs.createReadStream(
      path.join(
        __dirname,
        "../../create-excel/sheets/Rendición General Anual.xlsx"
      )
    );
    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );
    res.setHeader(
      "Content-Disposition",
      'attachment; filename="Rendición General Anual.xlsx"'
    );
    file.pipe(res);

    console.log("El archivo Excel creado ha sido descargado.");
  });
};

module.exports = controller;
