var express = require('express');
var app = express();
const Usuario = require('./js/Usuario.js');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;

// set the view engine to ejs
//app.set('view engine', 'ejs');

// make express look in the public directory for assets (css/js/img)
app.use(express.static(__dirname));

// set the home page route
app.get('/', function(req, res) {

    // ejs render automatically looks in the views folder
    res.sendFile('index.html');
});

app.post('/paginas/cadastro.html', function(req, res) {
    var teste = req.body;
    var senha = teste.senha;
    var email = teste.email;
    
    const users = new Usuario('teste', 1, senha, email);
    res.redirect("../index.html");
});

app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});