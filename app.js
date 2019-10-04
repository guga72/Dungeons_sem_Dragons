var express = require('express');
var app = express();

const Usuario = require('./js/Usuario.js');


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

    // ejs render automatically looks in the views folder
    var senha2 = req.params.senha2;
    var senha = req.params.senha;
    var email = req.params.email;
    var users = new Usuario('teste', 1, senha, email);
    res.redirect("../index.html");
});

app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});