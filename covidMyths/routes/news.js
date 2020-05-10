var express = require('express');
var router = express.Router();


const mu = require("../db.js");

router.get('/getNews', (req,res) => {
  const page = req.params.page
  mu.getNewsOfCovid(page).then(result => {
      res.send(JSON.parse(result));
  })
});




module.exports = router;