const employeeService = require('../services/employee');
function getEmployees(req, res){
  employeeService.getAll()
  .then(data => res.send(data));
};
function getEmployee(req, res){
  employeeService.getByNumEmp(req.params.numemp)
  .then(data => res.send(data));
}
module.exports = {
  getEmployees,
  getEmployee,
}