var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    console.log("ok");
    var models = require('./../models');
    models.sequelize.sync().then(() => {
        console.log('Se ha conectado la BD');
        var rol = require('../controllers/IngresarDatos/insertRol');
        res.send('Se ha sincronizado porfin la BD');
    }).catch(err => {
        console.log(err, 'Hubo un error');
        res.send('No se pudo sincronizar la BD');
    });
});




module.exports = router;
