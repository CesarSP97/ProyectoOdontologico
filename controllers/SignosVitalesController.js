'use strict';
var models = require('./../models/');
var uuid = require('uuid');
var Historia = models.historia_clinica;
class SignosVitalesController {

    /**
     *
     *
     * @param {string} req
     * @param {string} res
     * @memberof LIsta los signos vitales
     */
    listar(req, res) {
        var texto=req.params.texto;
        Historia.findOne({where:{n_historia:texto}}).then(function (historia) {
            //res.send(historia);
           res.render('signos_vitales', {title: 'Signos Vitales',Historia:historia});
        });
    }

    /**
     *
     *
     * @param {string} req
     * @param {string} res
     * @memberof Guarda los signos vitales
     */
    guardarsignos(req, res) {
        
        var signos = models.signos_vitales;
        Historia.findOne({where:{n_historia:req.body.historial}}).then(function (historia) {
            //res.send(historia);
          var datosSig = {

            presion_arterial: req.body.p_arterial,
            frecuencia_cardiaca: req.body.f_cardiaca,
            temperatura: req.body.temperatura,
            respi_por_min: req.body.rpm,
            externa_id: uuid.v4(),
            historiaClinicaId: historia.id
        };
        signos.create(datosSig).then(function (signos) {
            console.log("Bien Henao");
            res.redirect("/examen_extraoral/"+req.body.historial);
        });
        });
        
    }

}
module.exports = SignosVitalesController;
