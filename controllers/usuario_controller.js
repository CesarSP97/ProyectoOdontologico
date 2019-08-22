'use strict';
var models = require('./../models/');
var uuid = require('uuid');
class UsuarioController {
    
//    guardarPorROl(req, res){
//        var rol = models.rol;
//        rol.filter({nombre:"usuario"}).run().then(function (roles){
//            if(roles.length > 0){
//                var role = roles[0];
//                var datos = {
//                    nombre: req.body.nombre,
//                    apellido: req.body.apellido,
//                    cedula: req.body.cedula,
//                    correo: req.body.correo,
//                    clave: req.body.clave,
//                    externa_id: uuid.v4(),
//                    id_rol: role.id
//                    };
//                
//                var personaP = new persona(datos);
//                
//                personaP.create({usuario:true}).then(function (personaSave){
//                    res.send(personaSave);
//                    res.redirect('/');
//                }).error(function (error){
//                    console.log(error);
//                });
//            }else {
//                res,send("No existe el Rol");
//            }
//        }).error(function (error){
//            console.log(error);
//        });
//    }
    
    
    
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