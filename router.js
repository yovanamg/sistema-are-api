const db = require('./queries')
const authController = require('./controllers/auth');
const orderController = require('./controllers/order');
const employeeController = require('./controllers/employee');
const lineaController = require('./controllers/linea');
const plantaController = require('./controllers/planta');
const emailCtrl = require('./controllers/email');
module.exports.set = app => {
  app.post('/login', authController.login);
  app.post('/register', authController.register);
  // app.get('/orders', orderController.getOrders);
  // app.get('/orders/:id', orderController.getOrder);
  // app.post('/orders', orderController.addOrder);

  app.get('/ldm_empleados_vigentes', employeeController.getEmployees);
  app.get('/ldm_empleados_vigentes/:numemp', employeeController.getEmployee);
  
  // app.get('/lineas_telefonicas', lineaController.getLineas);
  app.get('/lineas_telefonicas/:id', lineaController.getLinea);
  app.post('/lineas_telefonicas', lineaController.addLinea);
  
  // app.get('/ldm_planta/:numemp', plantaController.getPlanta)


  // app.get('/ldm_empleados_vigentes', db.getUsers)
  // app.get('/ldm_empleados_vigentes/:numemp', db.getEmployeeByNumemp)
  // app.post('/lineas_telefonicas', db.createLinea)
  app.get('/lineas_telefonicas', db.getLineas)
  app.get('/ldm_planta/:numemp', db.getObjectManager)

  app.get('/equipo/:solicitudId', db.getEquipoId)
  app.post('/email_solicitud', emailCtrl.sendEmail);
}