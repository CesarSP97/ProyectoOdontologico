'use strict';
var models = require('./../models/');
var uuid = require('uuid');
class DiagnosticoController {
    
    guardarDiagnostico(req, res) {
        var diagnostico = models.diagnostico;
        var datosDig = {
            
            diagnostico_medico: req.body.diagnostico,
            externa_id: uuid.v4()
        };        
        diagnostico.create(datosDig).then(function (diagnostico) {            
                console.log("Bien Henao");
                res.redirect("/PlanDeTratamiento");
        });
    }

}
module.exports = DiagnosticoController;



