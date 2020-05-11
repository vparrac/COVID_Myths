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
  const verdad = req.body.verdad;
  const mito = req.body.mito;
  console.log("usuario cuerpo ", req.body);
  mu.getDocById(user, "login").then((u) => {
    console.log("Usuario DB", u);
    const usuario = u[0].username;
    mu.insertOneDoc(
      { titulo, contenido, usuario, verdad, mito },
      "preguntas"
    ).then((promise) => {
      res.status(200).end();
    });
  });
});

router.put("/votarVerdad", async (req, res) => {
  //Un usuario sólo vota una vez por una pregunta
  const usuario = req.body.usuario;
  const pregunta = req.body.id;
  const votoVerdad = await mu.getVotoPregunta(usuario, pregunta, "votosVerdad");
  if (votoVerdad.length == 0) {
    mu.votarTrue(req.body.id).then((u) => {
      mu.insertOneDoc({ usuario, pregunta }, "votosVerdad").then(
        mu
          .getVotoPregunta(usuario, pregunta, "votosMentira")
          .then(async (vc) => {
            if (vc.length > 0) {
              await mu.deleteDoc({ usuario, pregunta }, "votosMentira");
              await mu.noVotarFalse(pregunta);
              res.status(200).end();
            } else {
              console.log("Borrando");
              mu.insertOneDoc({ usuario, pregunta }, "votos").then(async () => {
                res.status(200).end();
              });
            }
          })
      );
    });
  } else {
    res.status(200).end();
  }
});

router.put("/votarMentira", async (req, res) => {
  //Un usuario sólo vota una vez por una pregunta
  const usuario = req.body.usuario;
  const pregunta = req.body.id;
  const votoMentira = await mu.getVotoPregunta(
    usuario,
    pregunta,
    "votosMentira"
  );
  if (votoMentira.length == 0) {
    mu.votarFalse(req.body.id).then(async (u) => {
      mu.insertOneDoc({ usuario, pregunta }, "votosMentira").then(
        mu
          .getVotoPregunta(usuario, pregunta, "votosVerdad")
          .then(async (vc) => {
            if (vc.length > 0) {
              await mu.deleteDoc({ usuario, pregunta }, "votosVerdad");
              await mu.noVotarTrue(pregunta);
              res.status(200).end();
            } else {
              console.log("Borrando");
              mu.insertOneDoc({ usuario, pregunta }, "votos").then(async () => {
                res.status(200).end();
              });
            }
          })
      );
    });
  } else {
    res.status(200).end();
  }
});

module.exports = router;
