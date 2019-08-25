var models = require('../../models/');
var uuid = require('uuid');
var Rol = models.rol;
var Usuario = models.usuario;

var insertRol = function () {
    Rol.findOrCreate({where: {nombre: 'ODONTOLOGO'},
        defaults: {id: '1'}});

    Rol.findOrCreate({where: {nombre: 'SECRETARIA'},
        defaults: {id: '2'}});

    Rol.findOrCreate({where: {nombre: 'ADMINISTRADOR'},
        defaults: {id: '3'}});

    Usuario.findOrCreate({where: {rolId: '3'},
        defaults: {
            id: '1',
            nombre: 'Admin',
            apellido: 'strador',
            cedula: '9999999999',
            correo: 'admin@hotmail.com',
            clave: 'admin',
            externa_id: uuid.v4()
        }});
    
    Usuario.findOrCreate({where: {rolId: '2'},
        defaults: {
            id: '2',
            nombre: 'Secre',
            apellido: 'taria',
            cedula: '2222222222',
            correo: 'secre@hotmail.com',
            clave: 'secre',
            externa_id: uuid.v4()
        }});
    
    Usuario.findOrCreate({where: {rolId: '1'},
        defaults: {
            id: '3',
            nombre: 'Odon',
            apellido: 'tologo',
            cedula: '4444444444',
            correo: 'odon@hotmail.com',
            clave: 'odon',
            externa_id: uuid.v4()
        }});
};
module.exports = insertRol();