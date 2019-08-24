'use strict';
var models = require('./../models/');
var passport = require('passport');
var Usuario = models.usuario;
var Rol = models.rol;
class CuentaController {
    perfil(req,res){
           if(req.user.rol === "ADMINISTRADOR"){
               Usuario.findAll({include:{model:Rol}}).then(function(cuenta){
                   res.render('admin', { title: 'Administrador', ocultar: 'true' ,Cuenta:cuenta});
               }
               ).error(function(error){});
               
           }else if(req.user.rol === "SECRETARIA"){
               
           }else if(req.user.rol === "ODONTOLOGO"){
               res.render('index', { title: 'Pagina', session: false });
           }

    }
    cerrar_sesion(req, res) {        
        req.session.destroy();        
        res.redirect('/');
    }

}
module.exports = CuentaController;