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
  var citas = require('../controllers/CitasController');
 var Citas = new citas();
 var secuencia = require('../controllers/SecuenciaController');
 var Secuencia = new secuencia();
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
         res.redirect('/perfil');
     }
 };
 var admin = function(req, res, next) {
     if (req.user.rol === "ADMINISTRADOR") {
         next();
     } else {
         req.flash('error', 'No esta autorizado!');
         res.redirect('/perfil');
     }
 };
  var secre = function(req, res, next) {
     if (req.user.rol === "SECRETARIA") {
         next();
     } else {
         req.flash('error', 'No esta autorizado!');
         res.redirect('/perfil');
     }
 };
  var odon = function(req, res, next) {
     if (req.user.rol === "ODONTOLOGO") {
         next();
     } else {
         req.flash('error', 'No esta autorizado!');
         res.redirect('/');
     }
 };
 //Redireccionamiento de Vistas
 
 router.get('/', function(req, res, next) {
     res.render('login', { title: 'Inicio de Sesion', ocultar: 'true' });
 }); 

 router.get('/DatosPersonales',auth, odon, Persona.visualizar);


 router.get('/odontograma', auth, odon, function(req, res, next) {
     res.render('Odontograma', { title: 'Odontograma', ocultar: 'true' });
 });
 
 router.get('/SecuenciaTratamiento', auth, odon, function(req, res, next) {
     res.render('secuenciaTratamiento', { title: 'Secuencia de Tratamiento', ocultar:'false'});
 });
 router.get('/signos_vitales/:texto', auth, odon, Signos.listar);
 /*router.get('/signos_vitales', auth, function(req, res, next) {
     res.render('signos_vitales', { title: 'Signos Vitales'});
 });*/

 router.get('/examen_extraoral/:texto', odon, auth,Examen.listar);
 router.get('/Diagnostico/:texto', auth, odon, Diagnostico.listar);


 router.get('/buscar', auth, odon, Persona.listarPacientes);
router.get('/buscar/paciente', auth, Persona.buscarPaciente);

//router.get('/admin', function(req, res, next) {
//     res.render('admin', { title: 'Administrador', ocultar: 'true' });
// });

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
 router.get('/lista/pacientes/', auth, secre,Citas.listarPacientes);
 router.post('/guardar/citas/', auth,Citas.guardarCitas);
 router.post('/pago/citas/', auth,Citas.pagoCitas);
 router.post('/editar/citas/', auth,Citas.editarCitas);
 router.post('/editar/costo/', auth,Citas.editarPagoCitas);
 router.post('/editar/paciente', auth,Persona.editarPaciente);
 router.get('/citas', auth, secre, Citas.listarCitas);
 router.get('/precio/citas', auth, odon, Citas.listarPagoCitas);
 router.get('/Secuencia/:texto', auth,Secuencia.listarSecuencia);
 router.post('/editar/Secuencia/', auth,Secuencia.editarSecuencia);

 module.exports = router;