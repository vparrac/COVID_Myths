var express = require("express");
var router = express.Router();

const mu = require("../db.js");

router.get("/getPreguntas", (req, res) => {
  mu.getDocs("preguntas").then((promise) => {
    console.log("P", promise);
    res.send(promise);
  });
});

router.post("/publicarPregunta", (req, res) => {
  const user = req.body.user;
  const titulo = req.body.titulo;
  const contenido = req.body.contenido;
  console.log("usuario cuerpo ", req.body);
  mu.getDocById(user, "login").then((u) => {
    console.log("Usuario DB",u)
    const usuario = u[0].username;
    mu.insertOneDoc({ titulo, contenido, usuario }, "preguntas").then(
      (promise) => {
        res.status(200).end();
      }
    );
  });
});

module.exports = router;
