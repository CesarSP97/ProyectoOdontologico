'use strict';
var models = require('./../models/');
var uuid = require('uuid');
class PersonaController {
    
    guardarpaciente(req, res) {
        var persona = models.persona;
        var datosP = {
            
            numero_historia: req.body.n_historia,
            fecha_creacion: req.body.f_actual,
            nombres: req.body.nombres,
            apellidos: req.body.apellidos,
            edad: req.body.edad,
            genero: req.body.genero,
            fecha_nac: req.body.f_nacimiento,
            motivo_cons: req.body.m_consulta,
            telefono: req.body.telefono,
            telefono_emer: req.body.telefonoE,
            correo: req.body.correo,
            enf_asite: req.body.enfermedad,
            sector: req.body.sector,
            calle_principal: req.body.calleP,
            calle_secundaria: req.body.calleS,
            referencia: req.body.referencia,
            alergia_antibiotico: req.body.alergia_antibiotico,
            alergia_anestesia: req.body.alergia_anestesia,
            hemorragias: req.body.hemorragias,
            VIH_SIDA: req.body.VIH_SIDA,
            tuberculosis: req.body.Tuberculosis,
            asma: req.body.Asma,
            diabetes: req.body.Diabetes,
            hipertencion: req.body.Hipertensión,
            enfermedades_cardicadas: req.body.enf_cardiaca,
            medicamentos: req.body.medicamentos,
            otros: req.body.otros,
            external_id: uuid.v4()
        };        
        persona.create(datosP).then(function (newpersona) {            
                console.log("Bien Henao");
                res.redirect("/");
        });
    }

}
module.exports = PersonaController;





