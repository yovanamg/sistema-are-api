const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const app = express()
// const port = 8080
// const db = require('./queries')
const config = require('./config');
const router = require('./router');

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
app.use(express.static('client'));
router.set(app);

app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
})

app.listen(config.port, () => console.log('App listening on port '+ config.port));


// app.get('/ldm_empleados_vigentes', db.getUsers)
// app.post('/lineas_telefonicas', db.createLinea)
// app.get('/lineas_telefonicas', db.getLineas)
// app.get('/ldm_empleados_vigentes/:numemp', db.getEmployeeByNumemp)
// app.get('/ldm_planta/:numemp', db.getObjectManager)
// app.get('/ldm_empleados_vigentes/:numemp', db.getUserById)

// app.listen(port, () => {
//   console.log(`App running on port ${port}.`)
// })