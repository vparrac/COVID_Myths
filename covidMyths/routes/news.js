var express = require('express');
var router = express.Router();


const mu = require("../db.js");

router.get('/getNews', (req,res) => {
  mu.getNewsOfCovid().then(promise => {
      res.send(JSON.parse(promise));
  })
});




module.exports = router;