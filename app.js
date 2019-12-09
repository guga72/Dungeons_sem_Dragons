const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');


let app = express();
let port = process.env.PORT || 8080;

app.use(bodyParser.json())
app.use(cors())
app.use(bodyParser.urlencoded({extended: false}))

let Usuarios = require('./rotas/Usuario')

app.use('/usuario', Usuarios);

app.listen(port, () => {
  console.log("Server is running on port: " + port)
})
