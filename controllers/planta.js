const plantaService = require('../services/planta');
function getPlanta(req, res){
    plantaService.getByNumEmp(req.params.numemp)
  .then(data => res.send(data));
}
module.exports = {
  getPlanta
}