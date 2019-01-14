'use strict';
const path = require('path');
const pdf = require('html-pdf');
const pug = require('pug');

exports.generatePDF = function (parameters, template) {
  console.log('------------------------------------');
  console.log(parameters, template);
  console.log('------------------------------------');
  const filePath = 'common/templates/' + template;
  const templatePath = path.join(process.cwd(),filePath);
  const compiler = pug.compileFile(templatePath);
  const compiledHtml = compiler(parameters);
  const pdfOptions = {
    base: `file://${process.cwd()}/`,
    format: 'Letter',
    border: {
      bottom: '0.5in'
    }
  };
  return new Promise((resolve, reject) => {
    pdf.create(compiledHtml, pdfOptions).toBuffer((err, response) => {
      if (err) return reject(err);
      resolve(response);
    });
  });
};