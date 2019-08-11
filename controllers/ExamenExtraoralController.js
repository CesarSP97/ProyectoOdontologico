'use strict';
var models = require('./../models/');
var uuid = require('uuid');
class ExamenExtraoralController {
    
    guardarexamen(req, res) {
        var examen = models.examen_extraoral;
        var datosex = {
            
            labios: req.body.labios,
            mejillas: req.body.mejillas,
            maxilar_superior: req.body.m_superior,
            maxilar_inferior: req.body.m_inferior,
            lengua: req.body.lengua,
            paladar: req.body.paladar,
            piso: req.body.piso,
            carrillos: req.body.carrillos,
            glandulas_salibales: req.body.g_salivales,
            ATM: req.body.atm,
            oro_faringue: req.body.o_faringue,
            ganglios: req.body.ganglios,            
            external_id: uuid.v4()
        };        
        examen.create(datosex).then(function (exa) {            
                console.log("Bien Henao");
                res.redirect("/");
        });
    }

}
module.exports = ExamenExtraoralController;

