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

            rol: {
                nombre: req.body.rol
            }
        };
        console.log(datos);
        usuario.create(datos, { include: [{ model: models.rol, as: 'rol' }] }).then(function(newcuenta) {
            res.redirect("/");
        });
    }

}
module.exports = UsuarioController;