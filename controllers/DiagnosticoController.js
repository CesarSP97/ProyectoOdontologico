'use strict';
var models = require('./../models/');
var uuid = require('uuid');
var Historia = models.historia_clinica;
class DiagnosticoController {


    /**
     *
     *
     * @param {string} req
     * @param {string} res
     * @memberof Listardo de Diagnostico
     */
    listar(req, res) {
        var texto = req.params.texto;
        Historia.findOne({where: {n_historia: texto}}).then(function (historia) {
            //res.send(historia);
            res.render('Diagnostico', { title: 'Diagnostico', Historia: historia});
        });
    }


    /**
     *
     *
     * @param {string} req
     * @param {string} res
     * @memberof GUardado de Diagnostico
     */
    guardarDiagnostico(req, res) {
        var diagnostico = models.diagnostico;
        Historia.findOne({where: {n_historia: req.body.historial}}).then(function (historia) {
            //res.send(historia);
            var datosDig = {

                diagnostico_medico: req.body.diagnostico,
                externa_id: uuid.v4(),
                historiaClinicaId: historia.id
            };
            diagnostico.create(datosDig).then(function (diagnostico) {
                console.log("Bien Henao");
                res.redirect("/perfil");
            });
        });

    }

}
module.exports = DiagnosticoController;

