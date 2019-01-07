const Sequelize = require('sequelize');
const sequelize = require('../db');
const User = sequelize.define('user', {
  username: Sequelize.STRING,
  password: Sequelize.STRING,
});

const Employee = sequelize.define('ldm_empleados_vigentes', {
  numemp: Sequelize.STRING,
  nombre: Sequelize.STRING,
  appat: Sequelize.STRING,
  apmat: Sequelize.STRING,
  fecha_nac: Sequelize.DATE,
  edo_civil: Sequelize.STRING,
  sexo: Sequelize.STRING,
  rfc: Sequelize.STRING,
  curp: Sequelize.STRING,
  num_afili: Sequelize.STRING,
  num_cred_inf: Sequelize.STRING,
  fecha_alta: Sequelize.DATE,
  fecha_antiguedad: Sequelize.DATE,
  tipo_nomina: Sequelize.STRING,
  puesto: Sequelize.STRING,
  nombre_puesto: Sequelize.STRING,
  centro: Sequelize.STRING,
  nombre_centro: Sequelize.STRING,
  fecha_baja: Sequelize.DATE,
  sueldo: Sequelize.INTEGER,
  sdiimss: Sequelize.INTEGER,
  banco_deposito: Sequelize.STRING,
  cta_bancaria: Sequelize.STRING,
  registropatronal: Sequelize.STRING,
  entidad_fed: Sequelize.STRING,
  calle: Sequelize.STRING,
  num_casa: Sequelize.STRING,
  municipio: Sequelize.STRING,
  estado: Sequelize.STRING,
  cod_postal: Sequelize.STRING,
  telefono: Sequelize.STRING,
  descripcionestudios: Sequelize.STRING,
  zona: Sequelize.STRING,
  gcb: Sequelize.STRING,
});
Employee.removeAttribute('id');
Employee.removeAttribute('createdAt');
Employee.removeAttribute('updatedAt');

const Linea = sequelize.define('lineas_telefonicas', {
  numemp_solicito: Sequelize.STRING,
  fecha_solicitud: Sequelize.DATE,
  fecha_cambio: Sequelize.DATE,
  numemp_linea: Sequelize.STRING,
  lada: Sequelize.STRING,
  autorizacion: Sequelize.STRING,
  motivo_solicitud: Sequelize.STRING,
  motivo_cambio: Sequelize.STRING,
  motivo_rechazo: Sequelize.STRING,
  motivo_baja: Sequelize.STRING,
  decision: Sequelize.BOOLEAN,
  estatus: Sequelize.STRING,
  responsiva: Sequelize.STRING,
  doc_responsiva: Sequelize.BLOB,
  doc_baja: Sequelize.BLOB,
  equipo_entregado: Sequelize.STRING,
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE,
});

const Planta = sequelize.define('ldm_planta', {
  numero_empleado: Sequelize.STRING,
  id_planta: Sequelize.BIGINT,
  id_planta_jefe: Sequelize.BIGINT,
  id_plantilla: Sequelize.INTEGER,
  nombre_completo: Sequelize.STRING,
  nombre: Sequelize.STRING,
  hc: Sequelize.INTEGER,
  puesto: Sequelize.STRING,
  tipo: Sequelize.STRING,
  especialidad: Sequelize.STRING,
  area: Sequelize.STRING,
  direccion: Sequelize.STRING,
  centro: Sequelize.INTEGER,
  zona: Sequelize.STRING,
  clave_lm: Sequelize.INTEGER,
  fecha_creado: Sequelize.DATE,
  fecha_modificado: Sequelize.DATE,
  fecha_eliminado: Sequelize.DATE,
  apellido: Sequelize.STRING,
  sn_escalonamiento_maximo: Sequelize.STRING,
  id_puesto: Sequelize.STRING,
});
Planta.removeAttribute('id');
Planta.removeAttribute('createdAt');
Planta.removeAttribute('updatedAt');

const Order  = sequelize.define('order', {
  title: Sequelize.STRING,
  date: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW
  },
  user_id: {
    type: Sequelize.INTEGER,
    references: {
      model: User,
      key: 'id'
    }
  }
});

User.hasMany(Order, {foreignKey: 'user_id'});

module.exports = {
  User,
  Employee,
  Linea,
  Planta,
  Order
}