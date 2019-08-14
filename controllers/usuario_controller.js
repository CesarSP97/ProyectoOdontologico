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
            external_id: uuid.v4(),

            rol: {
                nombre: req.body.rol
            }
        };
        console.log(datos);
        usuario.create(datos, { include: [{ model: models.rol, as: 'rol' }] }).then(function(newcuenta) {
            console.log("Bien Henao");
            res.redirect("/");
        });
    }

}
module.exports = UsuarioController;