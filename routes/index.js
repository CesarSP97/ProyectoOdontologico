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
 var cuenta = require('../controllers/CuentaController');
 var Cuenta = new cuenta();
 var passport = require('passport');

 //controlador de inicio de secion
 function verificar_inicio(req) {
     console.log(req.session);
     return (req.session !== undefined && req.session.passport !== undefined);
 }
 var auth = function(req, res, next) {
     if (verificar_inicio(req)) {
         console.log(req.session);
         next();
     } else {
         req.flash('error', 'Debes iniciar sesion primero!');
         res.redirect('/login');
     }
 };
 //Redireccionamiento de Vistas
 router.get('/', auth, function(req, res, next) {
     res.render('index', { title: 'Pagina', session: false });
 });

 router.get('/Odontologia', auth, function(req, res, next) {
     res.render('Odontologia', { title: 'Pagina Principal' });
 });

 router.get('/DatosPersonales', auth, Persona.visualizar);

 router.get('/Diagnostico', auth, function(req, res, next) {
     res.render('Diagnostico', { title: 'Diagnostico' });
 });

 router.get('/odontograma', auth, function(req, res, next) {
     res.render('Odontograma', { title: 'Odontograma', ocultar: 'true' });
 });

 router.get('/signos_vitales/:hisId', auth, function(req, res, next) {
     res.render('signos_vitales', { title: 'Signos Vitales'});
 });

 router.get('/examen_extraoral', auth, function(req, res, next) {
     res.render('examen_extraoral', { title: 'Examen Extraoral' });
 });

 router.get('/login', function(req, res, next) {
     res.render('login', { title: 'Inicio de Sesion', ocultar: 'true' });
 });

 router.get('/buscar', auth, Persona.listarPacientes);

 router.get('/admin', function(req, res, next) {
     res.render('admin', { title: 'Administrador', ocultar: 'true' });
 });

  router.post('/inicio_sesion', passport.authenticate('local-signin', {
     successRedirect: '/',
     failureRedirect: '/login'
 }));
router.get('/cerrar_sesion', auth, Cuenta.cerrar_sesion);
 //guardar persona
 router.post('/registro', Usuario.guardar);
 router.post('/DatosPersonales', auth, Persona.guardarpaciente);
 router.post('/signos_vitales/:hisId', auth, Signos.guardarsignos);
 router.post('/examen_extraoral', auth, Examen.guardarexamen);
 router.post('/diagnostico', auth, Diagnostico.guardarDiagnostico);

 module.exports = router;