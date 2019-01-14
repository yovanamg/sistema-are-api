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
  pool.query('SELECT * FROM ldm_planta WHERE numero_empleado = $1 OR id_planta_jefe = (SELECT p.id_planta FROM ldm_planta p WHERE p.numero_empleado = $1)', [numemp], (error, results) => {
    if (error) {
      throw error
    }
    const data = results.rows;
    const solicitante = [];
    const array = [];
    for (var i = 0; i < data.length; i++) {
      if(data[i].numero_empleado == numemp) {
        solicitante.push(data[i]);
      } else {
        array.push(data[i])
      }
    }
    const information = {
      solicitante,
      array,
    }
    response.status(200).json(information)
  })
}

const getEquipoId = (request, response) => {
  const solicitudId = parseInt(request.params.solicitudId)
  pool.query('SELECT * FROM equipos WHERE id = (SELECT equipo_id FROM solicitud_equipo WHERE solicitud_id=$1)', [solicitudId], (error, results) => {
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
  getEquipoId,
//   getUserById,
//   createUser,
//   updateUser,
//   deleteUser,
}