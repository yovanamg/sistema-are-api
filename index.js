const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 8080
const db = require('./queries')

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
})

app.get('/ldm_empleados_vigentes', db.getUsers)
app.post('/lineas_telefonicas', db.createLinea)
app.get('/lineas_telefonicas', db.getLineas)
app.get('/ldm_empleados_vigentes/:numemp', db.getEmployeeByNumemp)
app.get('/ldm_planta/:numemp', db.getObjectManager)
app.get('/ldm_planta/:id_planta_jefe', db.getIdCoordinators)
// app.get('/ldm_empleados_vigentes/:numemp', db.getUserById)
// app.post('/users', db.createUser)
// app.put('/users/:id', db.updateUser)
// app.delete('/users/:id', db.deleteUser)

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})