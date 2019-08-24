'use strict';
var models = require('./../models/');
var uuid = require('uuid');

class UsuarioController {

    guardar(req, res) {

        var usuario = models.usuario;
        if (req.body.external === "0") {
            var datos = {
                nombre: req.body.nombre,
                apellido: req.body.apellido,
                cedula: req.body.cedula,
                correo: req.body.correo,
                clave: req.body.clave,
                externa_id: uuid.v4(),
                rolId: req.body.rol

            };
            console.log(datos);

            usuario.create(datos).then(function (newcuenta) {
                if (newcuenta) {
                    var millisecondsToWait = 2500;
                    setTimeout(function () {
                        res.redirect('/perfil');
                        console.log("******Registrado con exito******");
                    }, millisecondsToWait);
                }
            }).catch(function (err) {
                req.flash('error', 'No se pudo crear la personar');
                res.redirect('/perfil');
            });
        } else {
            usuario.update({
                nombre: req.body.nombre,
                apellido: req.body.apellido,
                correo: req.body.correo,
                clave: req.body.clave,
                rolId: req.body.rol},
                    {where: {externa_id: req.body.external}}).then(function (updateUsuario, created) {
                if (updateUsuario) {
                    var millisecondsToWait = 2500;
                    setTimeout(function () {
                        res.redirect('/perfil');
                        console.log("******Modificado con exito******");
                    }, millisecondsToWait);
                }
            }).catch(function (err) {
                req.flash('error', 'No se pudo editar la personar');
                res.redirect('/perfil');
            });
        }
        ;
    }
}
module.exports = UsuarioController;