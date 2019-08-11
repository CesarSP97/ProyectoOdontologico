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
//Redireccionamiento de Vistas
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Pagina'});
});

router.get('/Odontologia', function(req, res, next) {
  res.render('Odontologia', { title: 'Pagina Principal'});
});

router.get('/IndicePlaca', function(req, res, next) {
  res.render('IndicePlaca', { title: 'Indice De Placa'});
});

router.get('/DatosPersonales', function(req, res, next) {
  res.render('DatosPersonales', { title: 'Datos Personales'});
});

router.get('/Diagnostico', function(req, res, next) {
  res.render('Diagnostico', { title: 'Diagnostico'});
});

router.get('/PlanDeTratamiento', function(req, res, next) {
  res.render('PlanDeTratamiento', { title: 'Plan De Tratamiento'});
});

router.get('/odontograma', function(req, res, next) {
  res.render('odontograma', { title: 'Odontograma',ocultar:'true'});
});

router.get('/signos_vitales', function(req, res, next) {
  res.render('signos_vitales', { title: 'Signos Vitales'});
});

router.get('/examen_extraoral', function(req, res, next) {
  res.render('examen_extraoral', { title: 'Examen Extraoral'});
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Inicio de Sesion',ocultar:'true'});
});

router.get('/registro', function(req, res, next) {
  res.render('registro', { title: 'Registrar',ocultar:'true'});
});

router.post('/login', Usuario.guardar);
router.post('/DatosPersonales', Persona.guardarpaciente);
router.post('/signos_vitales', Signos.guardarsignos);
router.post('/examen_extraoral', Examen.guardarexamen);

module.exports = router;
