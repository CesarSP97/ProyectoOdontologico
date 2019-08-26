var express = require('express');
var router = express.Router();

/* Sincronizacion con la Base de datos */
router.get('/', function (req, res, next) {
    var models = require('./../models');
    models.sequelize.sync().then(() => {
        console.log('*****Se ha conectado la Base de Datos*****');
        res.send('Se ha sincronizado la Base de Datos');
        var rol = require('../controllers/IngresarDatos/insertRol');
    }).catch(err => {
        console.log(err, '*****Hubo un error*****');
        res.send('No se pudo sincronizar la Base de Datos');
    });
});
module.exports = router;
