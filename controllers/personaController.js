'use strict';
var models = require('./../models/');
var uuid = require('uuid');
class PersonaController {
    
    visualizar(req, res) {
        var persona = models.persona;
        persona.findAll().then(function (lista) {
            var index = 'HIS-' + (lista.length + 1);
            res.render('DatosPersonales', { title: 'Datos Personales', nro: index});
        });
        
    }
    guardarpaciente(req, res) {
        var persona = models.persona;
        var datosP = {
      
            nombres: req.body.nombres,
            Apellidos: req.body.apellidos,
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
            external_id: uuid.v4(),
            //usuarioId:??
            
                historia_clinica:{
                n_historia: req.body.n_historia,
                fecha_creacion: req.body.f_actual,
                external_id: uuid.v4()
                }
        };
        console.log(datosP);
        persona.create(datosP, { include: { model: models.historia_clinica, as: 'historia_clinica'}}).then(function(newperona) {
           
            res.redirect("/signos_vitales");
        });
    }

}
module.exports = PersonaController;





