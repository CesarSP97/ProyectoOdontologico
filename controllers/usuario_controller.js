'use strict';
var models = require('./../models/');
class UsuarioController {
    guardar(req, res) {
        var usuario = models.usuario;
        console.log("Algo salio bien");
        var datos = {
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            cedula: req.body.cedula,
            correo: req.body.correo,
            clave: req.body.clave
            
        };
        
         console.log("Hasta aquiiiii");
              
        usuario.create(datos).then(function (result) {
            console.log("Algo salio bien MAL");
            res.redirect('/');
        });

    }

}
module.exports = UsuarioController;


