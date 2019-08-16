'use strict';
var models = require('./../models/');
var uuid = require('uuid');
class SignosVitalesController {
    
    guardarsignos(req, res) {
        var signos = models.signos_vitales;
        var datosSig = {
            
            presion_arterial: req.body.p_arterial,
            frecuencia_cardiaca: req.body.f_cardiaca,
            temperatura: req.body.temperatura,
            respi_por_min: req.body.rpm,
            externa_id: uuid.v4()
        };        
        signos.create(datosSig).then(function (signos) {            
                console.log("Bien Henao");
                res.redirect("/examen_extraoral");
        });
    }

}
module.exports = SignosVitalesController;
