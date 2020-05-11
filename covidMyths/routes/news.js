var express = require('express');
var router = express.Router();

const mu = require('../db.js');

router.get('/getNews', (req, res) => {
  const page = req.query.page;
  mu.getNewsOfCovid(page).then((result) => {
    res.send(JSON.parse(result));
  });
});

router.put('/detalleNews', (req, res) => {
  mu.updateNoticia(req.body.contenido, req.body.upvote).then((result) => {
    mu.getDocByText(req.body.contenido).then((result) => {
      res.send(result);
    });
  });
});

router.post('/detalleNewsUpVote', (req, res) => {
  mu.getUpVotesByText(req.body.contenido).then((result) => {
    res.send(result);
  });
});

router.psot('/detalleNews', (req, res) => {
  mu.getDocByText(req.body.contenido).then((result) => {
    res.send(result);
  });
});

router.post('/detalleNewsDownVote', (req, res) => {
  mu.getDownVotesByText(req.body.contenido).then((result) => {
    res.send(result);
  });
});

router.post('/registrarComentario', (req, res) => {
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

module.exports = router;
