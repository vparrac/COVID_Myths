var express = require("express");
var router = express.Router();

const mu = require("../db.js");
const ObjectId = require("mongodb").ObjectID;

router.get("/getNews", (req, res) => {
  const page = req.query.page;
  mu.getNewsOfCovid(page).then((result) => {
    res.send(JSON.parse(result));
  });
});

router.delete("/socket");

router.put("/detalleNews", (req, res) => {
  mu.getDocByText(req.body.contenido).then((result) => {
    let ids;
    if (result.length > 0) {
      ids = result[0]._id;
    } else {
      ids = ObjectId();
    }
    mu.searchUsuarioInArray(ids, req.body.usuario).then((resultado) => {
      if (resultado.length > 0) {
        mu.updateNoticia(
          ids,
          req.body.usuario,
          req.body.upvote,
          req.body.contenido
        ).then((resultado) => {
          mu.getDownVotesByText(req.body.contenido).then((downVotes) => {
            mu.getUpVotesByText(req.body.contenido).then((upVotes) => {
              res.send({ downVotes, upVotes });
            });
          });
        });
      } else {
        mu.updateNoticia2(
          ids,
          req.body.usuario,
          req.body.upvote,
          req.body.contenido
        ).then((resultado) => {
          mu.getDownVotesByText(req.body.contenido).then((downVotes) => {
            mu.getUpVotesByText(req.body.contenido).then((upVotes) => {
              res.send({ downVotes, upVotes });
            });
          });
        });
      }

    });
  });
});

router.post("/detalleNewsUpVote", (req, res) => {
  mu.getUpVotesByText(req.body.contenido).then((result) => {
    res.send(result);
  });
});

router.post("/getComentarios", (req, res) => {
  mu.getMasComentarios(req.body.contenido, req.body.page).then((result) => {
    res.send(result);
  });
});

router.post("/detalleNewsDownVote", (req, res) => {
  mu.getDownVotesByText(req.body.contenido).then((result) => {
    res.send(result);
  });
});

router.post("/registrarComentario", (req, res) => {
  mu.registrarComentario(
    req.body.user,
    req.body.contenido,
    req.body.comentario
  ).then((result) => {
    mu.getDocByText(req.body.contenido).then((result) => {
      res.send(result);
    });
  });
});

router.post("/getNumComentarios", (req, res) => {
  mu.getTamanioComentarios(req.body.contenido).then((result) => {
    res.send(result);
  });
});

module.exports = router;
