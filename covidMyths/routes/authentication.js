/**
 * Dependencia a express
 */
const express = require("express");
/**
 * Creación del router que nos permite agrupar este archivo en funcionalidades exportables
 */
const router = express.Router();

/**
 * Dependencia de Passport
 */
const passport = require("passport");

/**
 * Método para crear un usuario
 */

router.post("/signup", (req, res, next) => {
  passport.authenticate("local-signup", function (err, user, info) {
    console.log(info);
    if (user === false) {
      res.statusMessage = info.mensaje;
      res.status(400).end();
    } else {
      res.statusMessage = "Registro creado con éxito";
      res.status(200).end();
    }
  })(req, res, next);
});

router.post("/singin", (req, res, next) => {
  passport.authenticate("local-signin", function (err, user) {
    if (user === false) {
      res.statusMessage = "Usuario o contraseña incorrectos";
      res.status(400).end();
    } else {
      req.login(user, function (err) {
        if (err) {
          return next(err);
        }

        res.statusMessage = req.user[0]._id;
        console.log(req.user[0]);
        res.json({ id: req.user[0]._id });
        res.status(200).end();
      });
    }
  })(req, res, next);
});

router.get("/getUser", async (req, res) => {
  const user = await req.user;
  if (req.user) {
    res.statusMessage = user[0]._id;
    res.json(user);
    res.status(200).end();
  } else {
    res.statusMessage = "No hay usuario";
    res.status(400).end();
  }
});

router.post("/salir", (req, res) => {
  req.logout();
  res.statusMessage = "Sesión finalizada con éxito";
  res.status(200).end();
});

module.exports = router;