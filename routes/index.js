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
         res.redirect('/');
     }
 };
 //Redireccionamiento de Vistas
 
 router.get('/', function(req, res, next) {
     res.render('login', { title: 'Inicio de Sesion', ocultar: 'true' });
 });
 router.get('/Odontologia', auth, function(req, res, next) {
     res.render('Odontologia', { title: 'Pagina Principal' });
 });

 router.get('/DatosPersonales', auth, Persona.visualizar);



 router.get('/odontograma', auth, function(req, res, next) {
     res.render('Odontograma', { title: 'Odontograma', ocultar: 'true' });
 });
 router.get('/signos_vitales/:texto', auth,Signos.listar);
 /*router.get('/signos_vitales', auth, function(req, res, next) {
     res.render('signos_vitales', { title: 'Signos Vitales'});
 });*/

 router.get('/examen_extraoral/:texto', auth,Examen.listar);
 router.get('/Diagnostico/:texto', auth,Diagnostico.listar);


 router.get('/buscar', auth, Persona.listarPacientes);
router.get('/buscar/paciente', auth, Persona.buscarPaciente);
/* router.get('/admin', function(req, res, next) {
     res.render('admin', { title: 'Administrador', ocultar: 'true' });
 });*/

  router.post('/inicio_sesion', passport.authenticate('local-signin', {
     successRedirect: '/perfil',
     failureRedirect: '/'
 }));
 router.get('/perfil', Cuenta.perfil);
 
 router.get('/cerrar_sesion', auth, Cuenta.cerrar_sesion);
 //guardar persona
 router.post('/registro', Usuario.guardar);
 router.post('/DatosPersonales', auth, Persona.guardarpaciente);
 router.post('/signos_vitales', auth, Signos.guardarsignos);
 router.post('/examen_extraoral', auth, Examen.guardarexamen);
 router.post('/diagnostico', auth, Diagnostico.guardarDiagnostico);

 module.exports = router;