var express = require('express');
var router = express.Router();


const mu = require("../db.js");

router.get('/getPreguntas', (req,res) => {
  mu.getDocs("preguntas").then(promise => {
      console.log("P",promise)
      res.send(promise);
  })
});


router.post('/publicarPregunta',(req,res)=>{    
    mu.insertOneDoc(req.body, 'preguntas').then(promise=>{
        res.status(200).end();
    });
})


module.exports = router;