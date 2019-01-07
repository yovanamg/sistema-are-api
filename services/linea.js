const Lineas = require('../models').Linea;
const getAll = () => Lineas.findAll();
const getById = id => Lineas.findById(id);
const add = linea => Lineas.create(linea);
module.exports = {add, getAll, getById};