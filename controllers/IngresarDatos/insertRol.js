var models = require('../../models/');
var Rol = models.rol;
var insertRol = function () {
    Rol.findOrCreate({where: {nombre: 'ODONTOLOGO'},
        defaults: {
            id: '1',
            job: 'ODONTOLOGO'}}).spread((user, created) => {
    });

    Rol.findOrCreate({where: {nombre: 'SECRETARIA'},
        defaults: {
            id: '2',
            job: 'SECRETARIA'}}).spread((user, created) => {
    });

    Rol.findOrCreate({where: {nombre: 'ADMINISTRADOR'},
        defaults: {
            id: '3',
            job: 'ADMINISTRADOR'}}).spread((user, created) => {
    });
};
module.exports = insertRol();