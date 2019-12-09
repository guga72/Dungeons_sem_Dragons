const express = require('express');
const cors = require('cors');
//const path = require('path');
const bodyParser = require('body-parser');


let app = express();
//app.use(express.static(path.join(__dirname, 'client/build')));
let port = process.env.PORT || 8080;

app.use(bodyParser.json())
app.use(cors())
app.use(bodyParser.urlencoded({extended: false}))

let Usuarios = require('./rotas/Usuario')
//let Raca = require('./rotas/Raca')
//let Personagem = require('./rotas/Personagem')
//let Classe = require('./rotas/Classe')

app.use('/usuario', Usuarios);
//app.use('/personagem', Personagem);
//app.use('/raca', Raca);
//app.use('/classe', Classe);

app.listen(port, () => {
  console.log("Server is running on port: " + port)
})

/*
if(process.env.NODE_ENV === "production"){
  app.use(express.static('client/build'));

  app.get('*', (req, res) =>{
    res.sendFile(path.resolve(__dirname, "client/build/index.html"))
  });
}
*/