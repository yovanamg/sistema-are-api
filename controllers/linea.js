const lineaService = require('../services/linea');
function getLineas(req, res){
  lineaService.getAll()
  .then(data => res.send(data));
};
function getLinea(req, res){
  lineaService.getById(req.params.id)
  .then(data => res.send(data));
}
function addLinea(req, res){
  lineaService.add({
    numemp_solicito: req.body.numemp_solicito,
    fecha_solicitud: req.body.fecha_solicitud,
    fecha_cambio: req.body.fecha_cambio,
    numemp_linea: req.body.numemp_linea,
    lada: req.body.lada,
    autorizacion: req.body.autorizacion,
    motivo_solicitud: req.body.motivo_solicitud,
    motivo_cambio: req.body.motivo_cambio,
    motivo_rechazo: req.body.motivo_rechazo,
    motivo_baja: req.body.motivo_baja,
    decision: req.body.decision,
    estatus: req.body.estatus,
    responsiva: req.body.responsiva,
    equipo_entregado: req.body.equipo_entregado,
  })
  .then(data => res.send(data));
};
module.exports = {
  getLineas,
  getLinea,
  addLinea
}