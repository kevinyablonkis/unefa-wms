const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const path = require("path");

const app = express();

// Configura el motor de plantillas Pug
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

// Middleware: procesa peticiones POST y cookies
app.use(bodyParser.urlencoded({ extended: true })); // Permite procesar datos del formulario codificados en URL
app.use(cookieParser()); // Habilita la lectura de cookies desde las peticiones

// Middleware: sirve archivos estáticos (imágenes, CSS, JavaScript)
app.use(express.static(path.join(__dirname, "./public")));

// Rutas de la aplicación (importadas desde archivos separados)
app.use(require("./src/routes/index.route"));
app.use(require("./src/routes/search.route"));
app.use(require("./src/routes/add.route"));
app.use(require("./src/routes/imprint.route"));
app.use(require("./src/routes/added.route"));
app.use(require("./src/routes/delete.route"));
app.use(require("./src/routes/deleted.route"));
app.use(require("./src/routes/documentation.route"));
app.use(require("./src/routes/all-subgroup.route"));
app.use(require("./src/routes/unique-subgroup.route"));
app.use(require('./src/routes/download-all.route'))
app.use(require('./src/routes/download-unique.route'))

// Ruta para alternar entre el modo oscuro y claro con cookies
app.get("/toggle-dark-mode", (req, res) => {
    const darkMode = req.cookies.darkMode === "enabled";
    res.cookie("darkMode", darkMode ? "disabled" : "enabled");
    res.redirect("/");
});

app.listen(3000, () => {
    console.log("Servidor conectado...");
});
