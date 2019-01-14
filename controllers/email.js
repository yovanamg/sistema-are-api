var nodemailer = require('nodemailer');
// email sender function
exports.sendEmail = function(req, res){
  // Definimos el transporter
  const solicitante = req.body.solicitante;
  const employee = req.body.collaborator;
  var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'yovanamata94@gmail.com',
      pass: 'yaya1106*'
    }
  });
  // Definimos el email
  var mailOptions = {
    from: 'Sistema ARE - Líneas Telefónicas',
    to: 'yovanamata94@gmail.com',
    subject: 'Solicitud de Línea Telefónica',
    text: 'Estimado Coordinador de Recursos Estratégicos',
    html: '<b>Solicitud de Línea Telefónica</b> ' +
            '<br /><div>Por medio del siguiente correo hago la ' + 
            'solicitud al area de Recursos Estratégicos para la ' + 
            'asignacion de una Línea Telefónica a el colaborador ' + 
            `<strong>${employee.nombre}</strong>` + ' con numero de empleado ' + `<strong>${employee.number}</strong>` +
            ' y puesto ' + `<strong>${employee.job}</strong>` + ', la linea es necesaria para realizar ' +
            ' sus funciones dentro de la empresa.</div><br />' +
            '<b>Datos de colaborador que solicita la línea</b><br />'  +
            '<div><strong>Nombre: </strong>'+`${solicitante.nombre}` + `${solicitante.appat}`+ `${solicitante.apmat}` + '</div>' +
            '<div><strong>Puesto: </strong>'+ `${solicitante.nombre_puesto}` + '</div>' +
            '<div><strong>Numero empleado: </strong>' + `${solicitante.numemp}</div>`
  };
  // Enviamos el email
  transporter.sendMail(mailOptions, function(error, info){
      if (error){
          console.log(error);
          res.send(500, error.message);
      } else {
          console.log("Email sent");
          res.status(200).jsonp(req.body);
      }
  });
};