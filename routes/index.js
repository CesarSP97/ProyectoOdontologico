var express = require('express');
var router = express.Router();
var usuarioR = require('../controllers/usuario_controller');
var usuarioR = new usuarioR();
//Redireccionamiento de Vistas
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Pagina'});
});

router.get('/Odontologia', function(req, res, next) {
  res.render('Odontologia', { title: 'Pagina Principal'});
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

router.get('/registrarse', function(req, res, next) {
  res.render('registro', { title: 'Registrar',ocultar:'true'});
});

router.post('/registrarse', usuarioR.guardar);

module.exports = router;
