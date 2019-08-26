'use strict';
var models = require('./../models/');
var uuid = require('uuid');
var Historia = models.historia_clinica;
class ExamenExtraoralController {

    /**
     *
     *
     * @param {string} req
     * @param {string} res
     * @memberof Listar examen
     */
    listar(req, res) {
        var texto = req.params.texto;
        Historia.findOne({where: {n_historia: texto}}).then(function (historia) {
            res.render('examen_extraoral', {title: 'Examen Extraoral', Historia: historia});
        });
    }

    /**
     *
     *
     * @param {string} req
     * @param {string} res
     * @memberof Guarda examen extraoral
     */
    guardarexamen(req, res) {
        var examen = models.examen_extraoral;
        Historia.findOne({where: {n_historia: req.body.historial}}).then(function (historia) {
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
                res.redirect("/Diagnostico/" + req.body.historial);
            });
        });
    }
}
module.exports = ExamenExtraoralController;

