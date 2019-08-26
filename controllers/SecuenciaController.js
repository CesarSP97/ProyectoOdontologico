'use strict';
var models = require('./../models/');
var uuid = require('uuid');
var Historia = models.historia_clinica;
var Persona = models.persona;
var Cita = models.cita;
var Secuencia = models.secuencia_tratamiento;
class SecuenciaController {

    /**
     *
     *
     * @param {string} req
     * @param {string} res
     * @memberof LIsta la secuencia de tratamiento
     */
    listarSecuencia(req, res) {
        var texto = req.params.texto;
        Secuencia.findAll({include: {model: Cita, include: {model: Persona, where: {id: texto}}}}).then(function (cita) {
            if (cita) {
                res.render('secuenciaTratamiento', {title: 'Secuencia', Citas: cita, ocultar: 'true'});
            }
        });
    }

    /**
     *
     *
     * @param {string} req
     * @param {string} res
     * @memberof Edita la secuencia de tratamiento
     */
    editarSecuencia(req, res) {
        Secuencia.update({
            diagnostico: req.body.diagnostico,
            tratamiento_realizado: req.body.tratamiento
        }, {where: {external_id: req.body.external}, include: {model: Cita}}).then(function (updateSecuencia, created) {
            if (updateSecuencia) {
                req.flash('info', ' exitoso');
                res.redirect('/Secuencia/' + req.body.paciente_id);
            }
        }).catch(function (err) {
            req.flash('error', 'Hubo un error');
            res.redirect('/buscar');
        });
    }
}
module.exports = SecuenciaController;
