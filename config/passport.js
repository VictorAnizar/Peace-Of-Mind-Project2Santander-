const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const Usuario = mongoose.model('Usuario');

passport.use(new LocalStrategy({
  usernameField: 'usuario',
  passwordField: 'password'
}, function (usuario, password, done) {
  Usuario.findOne({ usuario: usuario }).then(function (user) {
    if (!user || !user.validarPassword(password)) {
      return done(null, false, { errors: { 'usuario o contraseña': 'equivocado(a)' } });
    }
    return done(null, user);
  }).catch(done);
}));
