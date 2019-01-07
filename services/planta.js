const Plantas = require('../models').Planta;
const getByNumEmp = numemp => Plantas.findAll({where: {numero_empleado: numemp}});
module.exports = {getByNumEmp};
