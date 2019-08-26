'use strict';
var models = require('./../models/');
var uuid = require('uuid');
var Historia = models.historia_clinica;
class  OdontogramaController {
//    guardarodontograma(req, res) {
//        var odonto = models.odontograma;
//        odonto.findOne({where: {odontograma: req.body.tr}}).then(function (historia) {
//            //res.send(historia);
//            var datosex = {
//                
//                externa_id: uuid.v4(),
//                historiaClinicaId: historia.id
//            };
//            odonto.create(datosex).then(function (exa) {
//                console.log("Bien Henao");
//                res.redirect("/Diagnostico/"+req.body.historial);
//            });
//        });
//
//    }

    /**
     *
     *
     * @param {string} req
     * @param {string} res
     * @memberof Visualizacion del odontograma
     */
    visualizarOdonto(req, res) {
        res.redirect("/Diagnostico/" + req.body.historial);
    }
}
module.exports = OdontogramaController;


