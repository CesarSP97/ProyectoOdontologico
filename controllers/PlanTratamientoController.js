'use strict';
var models = require('./../models/');
var uuid = require('uuid');
class PlanTratamientoController {
    
    guardarPlanTratamiento(req, res) {
        var plan = models.plan_tratamiento;
        var datosPlan = {
            
            tratamiento: req.body.plan,
            precio: req.body.diagnostico,
            descuento: req.body.diagnostico,
            total: req.body.diagnostico,
            external_id: uuid.v4()
        };        
        plan.create(datosPlan).then(function (plan) {            
                console.log("Bien Henao");
                res.redirect("/");
        });
    }

}
module.exports = PlanTratamientoController;