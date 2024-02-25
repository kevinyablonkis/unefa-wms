const db = require("../../db/connection");
const conn = db.open();

const controller = {};

// Obtener la fecha y hora actual
let fechaHoraActual = new Date();

let año = fechaHoraActual.getFullYear();
let mes = fechaHoraActual.getMonth() + 1;
let dia = fechaHoraActual.getDate();

// Formatear la fecha como una cadena
let fechaFormateada =
  (dia < 10 ? "0" : "") + dia + "-" + (mes < 10 ? "0" : "") + mes + "-" + año;

controller.index = (req, res) => {
  const darkMode = req.cookies.darkMode === "enabled";
  let contentForm = req.body;

  let sql =
    "INSERT INTO Product (Code_Subgrupo,Stock,Serial,Description,AC,DC,Inserted,State) VALUES (?,?,?,?,?,?,?,?)";

  conn.run(
    sql,
    [
      contentForm.subgrupo,
      contentForm.seccion,
      contentForm.serial,
      contentForm.descrip,
      contentForm.AC,
      contentForm.DC,
      fechaFormateada,
      contentForm.state,
    ],
    (error, rows) => {
      if (error) {
        console.error(error.message);
        res.send(error.message);
      } else {
        res.render("added", { darkMode });
      }
    }
  );
};

module.exports = controller;
