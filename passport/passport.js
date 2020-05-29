// Mariana Rodriguez: Good use of passport. Sessions seem to last for a short time (at least it did for me when testing the app).
// There might be additional settings needed to fix this.

const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const MongoUtils = require("../db");
const bcrypt = require('bcrypt');


const BCRYPT_SALT_ROUNDS = 12;
function configurePassport(app) {
  // Mariana Rodriguez: These configurations are not pertinent to passport and as such should be done in the app.js, not here.Always remember the Single Responsibility Principle :)
  const flash = require("connect-flash");
  app.use(flash());
  const cookieParser = require("cookie-parser");
  app.use(cookieParser());
  const bodyParser = require("body-parser");
  app.use(bodyParser.json());
  app.use(
    bodyParser.urlencoded({
      extended: false,
    })
  );
  app.use(
    require("express-session")({
      secret: process.env.SECRETKEY || "prueba",
      resave: true,
      cookie: {
        expires: false,
      },
      saveUninitialized: false,
    })
  );

  app.use(passport.initialize());
  app.use(passport.session());
}

passport.serializeUser((user, done) => {
  done(null, { id: user[0]._id });
});

passport.deserializeUser(async (user, done) => {
  
  const usuario = await MongoUtils.getDocById(user.id, "login");  
  
  done(null, usuario);
});
passport.use(
  "local-signup",
  new LocalStrategy(
    {
      usernameField: "username",
      passwordField: "password",
      passReqToCallback: true,
    },
    async (req, username, password, done) => {
      const userdb = await MongoUtils.getLoginByUsername(username);

      if (userdb.length >= 1) {
        return done(null, false, {
          mensaje: "El correo ingresado ya está en uso",
        });
      } else {
        const p = password;
        const np = await bcrypt.hash(p,BCRYPT_SALT_ROUNDS)

        const user = await MongoUtils.insertOneDoc(
          { username, password: np },
          "login"
        );
        done(null, [
          {
            username: user.ops[0].email,
            _id: user.ops[0]._id,
          },
        ]);
      }
    }
  )
);

passport.use(
  "local-signin",
  new LocalStrategy(
    {
      usernameField: "username",
      passwordField: "password",
      passReqToCallback: true,
    },
    async (req, username, password, done) => {
      const userdb = await MongoUtils.getLoginByUsername(username);
      
      const np = await bcrypt.hash(password,BCRYPT_SALT_ROUNDS).then((a)=>console.log);
      const bol = await bcrypt.compare(password, userdb[0].password);
      

      if (userdb.length < 1) {
        return done(
          null,
          false,
          req.flash("signinMessage", "Usuario o contraseña incorrectos")
        );
      }
      if (!bol) {
        return done(
          null,
          false,
          req.flash("signinMessage", "Usuario o contraseña incorrectos")
        );
      }
      done(null, userdb);
    }
  )
);

module.exports = configurePassport;
