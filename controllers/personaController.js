'use strict';
var models = require('./../models/');
var uuid = require('uuid');
var Sequelize = require('sequelize');
var Op = Sequelize.Op;
var historia = models.historia_clinica;
var persona = models.persona;
var Signos = models.signos_vitales;
var Examen = models.examen_extraoral;
var Diagnostico = models.diagnostico;
class PersonaController {

    /**
     *
     *
     * @param {string} req
     * @param {string} res
     * @memberof Visualizar ltabla de personas
     */
    visualizar(req, res) {
        persona.findAll().then(function (lista) {
            var index = 'HIS-' + (lista.length + 1);
            res.render('DatosPersonales', {title: 'Datos Personales', nro: index});
        });
    }

    /**
     *
     *
     * @param {string} req
     * @param {string} res
     * @memberof LIsta lso pacientes
     */
    listarPacientes(req, res) {
        historia.findAll({include: {model: persona}}).then(function (lpersona) {
            if (lpersona) {
                res.render('buscar', {title: 'Buscar', listaP: lpersona});
            }
        }).catch(function (err) {
            req.flash('error', 'Hubo un error');
            res.redirect('/buscar');
        });
    }

    /**
     *
     *
     * @param {string} req
     * @param {string} res
     * @memberof Guarda datos de paciente
     */
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
            usuarioId: req.session.passport.user,
            historia_clinica: {
                n_historia: req.body.n_historia,
                fecha_creacion: req.body.f_actual,
                external_id: uuid.v4()
            }
        };
        persona.create(datosP, {include: {model: models.historia_clinica, as: 'historia_clinica'}}).then(function (newperona) {
            res.redirect("/signos_vitales/" + encodeURI(req.body.n_historia));
        });
    }

    /**
     *
     *
     * @param {string} req
     * @param {string} res
     * @memberof busca paciente
     */
    buscarPaciente(req, res) {
        var opcion = req.query.opcion;
        var texto = req.query.texto;
        if (opcion === 'Nhistoria') {
            historia.findOne({where: {n_historia: texto}, include: [{model: persona}, {model: Signos, as: "signos_vitales"}, {model: Examen, as: "examen_extraoral"}, {model: Diagnostico, as: "diagnostico"}]}).then(function (paciente) {
                if (paciente) {
                    res.render('buscar', {title: 'Buscar', Paciente: paciente});
                }
            }).catch(function (err) {
                req.flash('error', 'Hubo un error');
                res.redirect('/buscar');
            });
        } else if (opcion === 'apellidos') {
            historia.findOne({include: [{model: persona, where: {Apellidos: {[Op.like]: '%' + texto + '%'}}}, {model: Signos, as: "signos_vitales"}, {model: Examen, as: "examen_extraoral"}, {model: Diagnostico, as: "diagnostico"}]}).then(function (paciente) {
                if (paciente) {
                    res.render('buscar', {title: 'Buscar', Paciente: paciente});
                }
            }).catch(function (err) {
                req.flash('error', 'Hubo un error');
                res.redirect('/buscar');
            });
        }
    }

    /**
     *
     *
     * @param {string} req
     * @param {string} res
     * @memberof edita Paciente
     */
    editarPaciente(req, res) {
        persona.update({
            nombres: req.body.nombres,
            Apellidos: req.body.Apellidos,
            telefono: req.body.telefono,
            correo: req.body.correo
        }, {where: {external_id: req.body.external}}).then(function (updateSecuencia, created) {
            if (updateSecuencia) {
                req.flash('info', 'Modificacion exitosa');
                res.redirect('/buscar');
            }
        }).catch(function (err) {
            req.flash('error', 'Hubo un error');
            res.redirect('/error');
        });
    }
}
module.exports = PersonaController;





