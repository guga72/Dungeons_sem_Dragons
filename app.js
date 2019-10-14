var express = require('express');
var cookieParser = require('cookie-parser')
//const cookie = require('./js/cookie/cookie.js');
var app = express();
app.use(cookieParser());

const Usuario = require('./js/Usuario.js'); // pedindo requisição da classe usuario

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
//para pegar as informações do corpo da aplicação (pegar os dados do form)

/*var mysql = require('mysql'); // começo da comunicação com o banco de dados
var connetion = mysql.createConnection({ // criando a comunicação com o
    host: 'localhost',                   // banco
    user: 'root',
    password: '123456' 
});*/

var port = process.env.PORT || 8080;

app.use(express.static(__dirname));

//connetion.connect();

app.get('/', function(req, res) {
    res.sendFile('index.html');
});

app.post('/paginas/cadastro.html', function(req, res) {
    var corpo = req.body;
    var senha = corpo.senha;
    var email = corpo.email;
    var cookie = req.cookies.email;
    if (cookie === undefined){
        res.cookie("email",email, { maxAge: 100000, httpOnly: true });
        console.log('cookie criado');

    }
    else{
        console.log('cookie existente');
    }
    const users = new Usuario('teste', senha, email);
    //cookie.setCookie("email",corpo.email,2);
    //res.cookie="email="+corpo.email+"; path=/";
    //res.cookie("email", corpo.email);
    res.redirect("./game-page.html");
});

app.post('/paginas/login.html', function(req, res) {
    var corpo = req.body;
    var senha = corpo.senha;
    var email = corpo.email;
    
    const users = new Usuario('teste', 1, senha, email);
    res.redirect("./game-page.html");
});

app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});


//connetion.end();