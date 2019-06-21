var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Pagina Principal'});
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
  res.render('odontograma', { title: 'Odontograma'});
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Inicio de Sesion'});
});

router.get('/registro', function(req, res, next) {
  res.render('registro', { title: 'Registrar'});
});

module.exports = router;
