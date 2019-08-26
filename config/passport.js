//var bCrypt = require('bcrypt-nodejs');
var models = require('../models');
var usuarios = models.usuario;
var rols = models.rol;
module.exports = function(passport) {
    var Usuario = usuarios;
    var Rol = rols;
    var LocalStrategy = require('passport-local').Strategy;

    passport.serializeUser(function(usuario, done) {
        done(null, usuario.id);
    });

    passport.deserializeUser(function(id, done) {
        Usuario.findOne({ where: { id: id },include:{model:Rol} }).then(function(cuenta) {
            if (cuenta) {
                var userinfo = {
                    id: cuenta.id,
                    nombre: cuenta.nombre + " " + cuenta.apellido,
                    rol:cuenta.rol.nombre
                };
                done(null, userinfo);
            } else {
                done(cuenta.erros, null);
            }
        }).catch(function(err) {
            console.log("ERROR:", err);
        });
    });
    //Inicio de Session
    passport.use('local-signin', new LocalStrategy({
        usernameField: 'correo',
        passwordField: 'clave',
        passReqToCallback: true
    }, function(req, email, password, done) {
        var Usuario = usuarios;
        Usuario.findOne({ where: { correo: email } }).then(function(cuenta) {
            if (!cuenta) {
                return done(null, false);
            }
            if (cuenta.clave !== password) {
                return done(null, false);
            }
            var userinfo = cuenta.get();
            return done(null, userinfo);
        }).catch(function(err) {
            console.log("ERROR:", err);
            return done(null, false);
        });
    }));
}