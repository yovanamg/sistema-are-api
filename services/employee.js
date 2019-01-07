const Employees = require('../models').Employee;
const getAll = () => Employees.findAll();
const getByNumEmp = numemp => Employees.findAll({where: {numemp}});
const add = employee => Employees.create(employee);
module.exports = {add, getAll, getByNumEmp};
