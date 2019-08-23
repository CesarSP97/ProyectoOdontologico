'use strict';
var models = require('./../models/');
var passport = require('passport');

class CuentaController {

    cerrar_sesion(req, res) {        
        req.session.destroy();        
        res.redirect('/login');
    }

}
module.exports = CuentaController;