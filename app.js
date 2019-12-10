const express = require('express');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');


let app = express();
let port = process.env.PORT || 8080;
app.use(express.static(path.join(__dirname, 'client/build')));

app.use(bodyParser.json())
app.use(cors())
app.use(bodyParser.urlencoded({extended: false}))

let Usuarios = require('./rotas/Usuario')

app.use('/usuario', Usuarios);

app.listen(port, () => {
  console.log("Server is running on port: " + port)
})

if(process.env.NODE_ENV === "production"){
  app.use(express.static('client/build'));

  app.get('*', (req, res) =>{
    res.sendFile(path.resolve(__dirname, "client/build/index.html"))
  });
}