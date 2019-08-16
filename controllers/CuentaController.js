'use strict';
var models = require('./../models/');
var uuid = require('uuid');
class CuentaController {
        
        iniciar_sesion(req, res) {
        var cuenta = models.usuario;
        
        cuenta.getItem({usuaio: true}).filter({correo: req.body.correo}).run().then(function (janina) {
            if(janina.length > 0) {
                var cuenta = janina[0];
                if(cuenta.clave === req.body.clave) {
                    req.session.cuenta = {external:cuenta.usuario.externa_id,
                    usuario: cuenta.usuario.apellidos+" "+cuenta.usuario.nombres};
                    res.redirect('/');
                } else {
                    req.flash('error', 'Sus credenciales no son las correctas!');
                res.redirect('/');
                }
                
            } else {
                req.flash('error', 'Sus credenciales no son las correctas!');
                res.redirect('/');
            }
            
        }).error(function (error) {
            
        });
    }
    
}
module.exports = CuentaController;

