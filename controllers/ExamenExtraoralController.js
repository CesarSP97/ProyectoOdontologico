'use strict';
var models = require('./../models/');
var uuid = require('uuid');
var Historia = models.historia_clinica;
class ExamenExtraoralController {
    listar(req, res) {
        var texto = req.params.texto;
        Historia.findOne({where: {n_historia: texto}}).then(function (historia) {
            //res.send(historia);
            res.render('examen_extraoral', {title: 'Examen Extraoral', Historia: historia});
        });
    }
    guardarexamen(req, res) {
        var examen = models.examen_extraoral;
        Historia.findOne({where: {n_historia: req.body.historial}}).then(function (historia) {
            //res.send(historia);
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
                externa_id: uuid.v4(),
                historiaClinicaId: historia.id
            };
            examen.create(datosex).then(function (exa) {
                console.log("Bien Henao");
                res.redirect("/Diagnostico/"+req.body.historial);
            });
        });

    }

}
module.exports = ExamenExtraoralController;

