var express = require("express");
var router = express.Router();

const mu = require("../db.js");

router.get("/getPreguntas", (req, res) => {
  mu.getDocs("preguntas").then((promise) => {
    res.send(promise);
  });
});

router.get("/getPreguntaByPage", (req, res) => {
  const page = req.query.page;
  let query = req.query.query;
  if (query == "") {
    query = ".*";
  } else {
    query = ".*" + query + "*.";
  }
  const limit = 10;
  const startIndex = parseInt((page - 1) * limit);

  mu.getPaginateQuestion(startIndex, query).then((preguntas) => {
    const nsi = page * limit;
    let hasMore = false;
    mu.hasMore(nsi, query).then((number) => {
      if (number > parseInt(page) * 10) {
        hasMore = true;
      }

      res.send({ preguntas, hasMore });
    });
  });
});

router.post("/publicarPregunta", (req, res) => {
  const user = req.body.user;
  const titulo = req.body.titulo;
  const contenido = req.body.contenido;
  const verdad = req.body.verdad;
  const mito = req.body.mito;

  mu.getDocById(user, "login").then((u) => {
    const usuario = u[0].username;
    mu.insertOneDoc(
      { titulo, contenido, usuario, verdad, mito },
      "preguntas"
    ).then((promise) => {
      res.status(200).end();
    });
  });
});

router.post("/hacerUnComentario", (req, res) => {
  mu.insertOneDoc(req.body, "comentarios").then(() => res.status(200).end());
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

router.post("/comentariosUnaPregunta", (req, res) => {
  const criteria = { pregunta: req.body.id };

  mu.getDocsByCriteria(criteria, "comentarios").then((respuesta) => {
    res.send(respuesta);
  });
});

router.get("/comentariosUnaPregunta", (req, res) => {
  const pregunta = req.query.pregunta;
  const page = req.query.page;
  const criteria = { pregunta: pregunta };
  mu.getCommentarios(criteria, parseInt(page)).then((preguntas) => {
    
    let hasMore = false;
    mu.hasMoreComentarios(parseInt(pregunta), criteria).then((number) => {
      console.log("number", number);
      if (number > parseInt(page) * 10) {
        hasMore = true;
      }
      res.send({ preguntas, hasMore });
    });
  });
});

module.exports = router;
