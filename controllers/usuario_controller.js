'use strict';
var models = require('./../models/');
var uuid = require('uuid');

class UsuarioController {

    guardar(req, res) {

        var usuario = models.usuario;

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
        if (datos) {
            usuario.create(datos).then(function (newcuenta) {
                var millisecondsToWait = 2500;
                setTimeout(function () {
                    res.redirect('http://localhost:3000/admin');
                    console.log("******Registrado con exito******");
                }, millisecondsToWait);
            });
        } else {
            var millisecondsToWait = 2500;
            setTimeout(function () {
                res.redirect('http://localhost:3000/admin');
                console.log("Hubo un error");
            }, millisecondsToWait);
        }
        ;
    }
}
module.exports = UsuarioController;