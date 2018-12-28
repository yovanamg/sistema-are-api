const Pool = require('pg').Pool
const pool = new Pool({
  user: 'yovanamata',
  host: 'localhost',
  database: 'fwklineamando',
  password: '110694',
  port: 5432,
})

const getUsers = (request, response) => {
  pool.query('SELECT * FROM ldm_empleados_vigentes ORDER BY numemp ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const createLinea = (request, response) => {
  const { numemp_solicito, fecha_solicitud, numemp_linea, lada, autorizacion, motivo_solicitud, decision, estatus, responsiva, doc_responsiva, motivo_cambio, fecha_cambio, motivo_rechazo, motivo_baja, doc_baja, equipo_entregado } = request.body

  pool.query('INSERT INTO lineas_telefonicas (numemp_solicito, fecha_solicitud, numemp_linea, lada, autorizacion, motivo_solicitud, decision, estatus, responsiva, doc_responsiva, motivo_cambio, fecha_cambio, motivo_rechazo, motivo_baja, doc_baja, equipo_entregado) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16)',
    [numemp_solicito, fecha_solicitud, numemp_linea, lada, autorizacion, motivo_solicitud, decision, estatus, responsiva, doc_responsiva, motivo_cambio, fecha_cambio, motivo_rechazo, motivo_baja, doc_baja, equipo_entregado ],
    (error, results) => {
      if (error) {
      }
    response.status(201).send(`Linea agregada correctamente.`)
  })
}

const getLineas = (request, response) => {
  pool.query('SELECT * FROM lineas_telefonicas INNER JOIN ldm_empleados_vigentes ON ldm_empleados_vigentes.numemp = lineas_telefonicas.numemp_linea ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getEmployeeByNumemp = (request, response) => {
  const numemp = parseInt(request.params.numemp)

  pool.query('SELECT * FROM ldm_empleados_vigentes WHERE numemp = $1', [numemp], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getObjectManager = (request, response) => {
  const numemp = parseInt(request.params.numemp)
  console.log('------------------------------------');
  console.log('1');
  console.log('------------------------------------');

  pool.query('SELECT * FROM ldm_planta WHERE numero_empleado = $1', [numemp], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getIdCoordinators = (request, response) => {
  console.log('------------------------------------');
  console.log('request', request);
  console.log('------------------------------------');
  console.log('response', response);
  console.log('------------------------------------');
  console.log('request.params.id_planta_jefe', request.params);
  console.log('------------------------------------');
  const id_planta_jefe = parseInt(request.params.id_planta_jefe);
  console.log('------------------------------------');
  console.log('id_planta_jefe', id_planta_jefe);
  console.log('------------------------------------');
  
  pool.query('SELECT * FROM ldm_planta WHERE id_planta_jefe = $1', [id_planta_jefe], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

// const createUser = (request, response) => {
//   const { name, email } = request.body

//   pool.query('INSERT INTO users (name, email) VALUES ($1, $2)', [name, email], (error, results) => {
//     if (error) {
//       throw error
//     }
//     response.status(201).send(`User added with ID: ${result.insertId}`)
//   })
// }

// const updateUser = (request, response) => {
//   const id = parseInt(request.params.id)
//   const { name, email } = request.body

//   pool.query(
//     'UPDATE users SET name = $1, email = $2 WHERE id = $3',
//     [name, email, id],
//     (error, results) => {
//       if (error) {
//         throw error
//       }
//       response.status(200).send(`User modified with ID: ${id}`)
//     }
//   )
// }

// const deleteUser = (request, response) => {
//   const id = parseInt(request.params.id)

//   pool.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
//     if (error) {
//       throw error
//     }
//     response.status(200).send(`User deleted with ID: ${id}`)
//   })
// }

module.exports = {
  getUsers,
  createLinea,
  getLineas,
  getEmployeeByNumemp,
  getObjectManager,
  getIdCoordinators,
//   getUserById,
//   createUser,
//   updateUser,
//   deleteUser,
}