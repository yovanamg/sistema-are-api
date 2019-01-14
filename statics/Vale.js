'use strict';
const moment = require('moment');
const generatePDF = require('../services/Utils').generatePDF;

module.exports = (Vale) => {
  
  Vale.generarRecibosMasivos = function(data, cb) {
    console.log('------------------------------------');
    console.log('data', data);
    console.log('------------------------------------');
    const recibosData = [];
    const fechas = ['2019', '2018'];
    const newRecibo = {
      hoy: '01-15-2019',
      fechaCorte: '01-15-2019',
      numeroPago: 2,
      numero: 2 + ' de ' + 6,
      folio: '029139821',
      nombreDistribuidora: 'Edgar Fernando Mata García',
      nombreCliente: 'Yovana Mata García',
      importe: '100.00',
      saldoAnterior: 99,
      saldoActual: 88,
      index: 2 + 1
    };
    recibosData.push(newRecibo);
    let file = 'reciboDistribuidora/recibo.pug';
    let data = {recibos: recibosData};
    generatePDF(data, file)
    .then(pdf => {
      let ctx = {};
      ctx.type = '.pdf';
      ctx.body = pdf;
      cb(null, {ctx, fechas});
    })
    .catch(err => {
      cb({
        statusCode: 404,
        message: 'Error al mandar el recibo ' + err,
      });
    });
  };
};
