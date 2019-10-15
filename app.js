var express = require('express');
var cookieParser = require('cookie-parser')
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
let usuarios = [];
app.use(express.static(__dirname));
var http = require('http');

//connetion.connect();

app.get('/', function(req, res) {
    res.sendFile('index.html');
}).get('/cadastro', (req, res) =>{
    res.sendFile(`${__dirname}/paginas/cadastro.html`);
}).get('/login', (req, res)=>{
    res.sendFile(`${__dirname}/paginas/login.html`);
}).post('/login', (req, res)=>{
   
    let reqBody = req.body;
    let senha = reqBody.senha;
    let email = reqBody.email;
    let novoUser = {email, senha};
    var isNotCadastrado = true;
    usuarios.forEach(usuario =>{
        if(usuario.email === email){
            isNotCadastrado = false;
        }
    });

    if(isNotCadastrado){
        usuarios.push(novoUser);
        console.log(usuarios);
        res.sendFile(`${__dirname}/paginas/login.html`);
    }else{
        res.redirect('/cadastro?errCad=true');
    }
    
}).get('/game-page', (req,res) =>{
    res.sendFile(`${__dirname}/paginas/game-page.html`);
}).post('/game-page', (req, res)=>{
    let email = req.body.email;
    let senha = req.body.senha;
    var isValidUser = false;

    usuarios.forEach(usuario=>{
        if(usuario.email === email && usuario.senha === senha){
            isValidUser = true;
            return 0;
        }
    });
    if(isValidUser){
        var cookie = req.cookies.email;
        if (cookie === undefined){
            res.cookie("email",email, { 
                expires: new Date(Date.now()+10000),
                path: '/' });
            console.log('cookie criado');

        }
        else{
            console.log('cookie existente');
        }

        res.sendFile(`${__dirname}/paginas/game-page.html`);
    }else{
        res.redirect('/login?errLogin=true');
    }
});



app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});

http.createServer(function(req,res){
    res.writeHead(200,{"Content-Type" : "text/plain"});
    res.end("Hello World\n");
}).listen(process.env.PORT)


//connetion.end();