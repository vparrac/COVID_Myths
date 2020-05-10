var express = require('express');
var router = express.Router();


const mu = require("../db.js");

router.get('/getNews', (req,res) => {
  const page = req.query.page
  mu.getNewsOfCovid(page).then(result => {
      res.send(JSON.parse(result));
  })
});


router.get('/get', (req,res) => {
  mu.getDocById('5eb6fd002e47652020c2bd03','myth').then(result => {
    res.send(result);
  })
});

module.exports = router;