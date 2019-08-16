var express = require('express');
var router = express.Router();
var usuario = require('../controllers/usuario_controller');
var Usuario = new usuario();
var persona = require('../controllers/personaController');
var Persona = new persona();
var signos = require('../controllers/SignosVitalesController');
var Signos = new signos();
var examen = require('../controllers/ExamenExtraoralController');
var Examen = new examen();
var diagnostico = require('../controllers/DiagnosticoController');
var Diagnostico = new diagnostico();
var plan = require('../controllers/PlanTratamientoController');
var Plan = new plan();
//Redireccionamiento de Vistas
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Pagina'});
});

router.get('/Odontologia', function (req, res, next) {
    res.render('Odontologia', {title: 'Pagina Principal'});
});

router.get('/DatosPersonales', Persona.visualizar);

router.get('/Diagnostico', function (req, res, next) {
    res.render('Diagnostico', {title: 'Diagnostico'});
});

router.get('/PlanDeTratamiento', function (req, res, next) {
    res.render('PlanDeTratamiento', {title: 'Plan De Tratamiento'});
});

router.get('/odontograma', function (req, res, next) {
    res.render('Odontograma', {title: 'Odontograma', ocultar: 'true'});
});

router.get('/signos_vitales', function (req, res, next) {
    res.render('signos_vitales', {title: 'Signos Vitales'});
});

router.get('/examen_extraoral', function (req, res, next) {
    res.render('examen_extraoral', {title: 'Examen Extraoral'});
});

router.get('/login', function (req, res, next) {
    res.render('login', {title: 'Inicio de Sesion', ocultar: 'true'});
});

router.get('/registro', function (req, res, next) {
    res.render('registro', {title: 'Registrar', ocultar: 'true'});
});

//controlador de inicio de secion
//function verificar_inicio(req) {
//    return (req.session !== undefined && req.session.cuenta !== undefined);
//}
//var auth = function (req, res, next) {
//    if (verificar_inicio(req)) {
//        next();
//    } else {
//        req.flash('error', 'Debes iniciar sesion primero!');
//        res.redirect('/login');
//    }
//};


//guardar persona
router.post('/login', Usuario.guardar);
router.post('/DatosPersonales', Persona.guardarpaciente);
router.post('/signos_vitales', Signos.guardarsignos);
router.post('/examen_extraoral', Examen.guardarexamen);
router.post('/diagnostico', Diagnostico.guardarDiagnostico);
router.post('/Plan', Plan.guardarPlanTratamiento);

module.exports = router;
