const express = require('express');
var cookieParser = require('cookie-parser');
const path = require('path');
const { createEngine } = require('express-react-views');
var app = express();
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

    /*const mysql = require('mysql');
    const connection = mysql.createConnection({
        host: 'localhost',
        user : 'root',
        password: '',
        database: 'DsemD'
    });*/

    
    /*connection.connect((err) => {
        if (err) throw err;
        console.log('Connected!');
      });*/

let usuarios = [];
app.use(express.static(path.join(__dirname, './public')));
var http = require('http');

app.get('/paginaInicial', (req, res) => {
    if(req.cookies.email == undefined){
        res.json(mostrarLogin = {mostrarLogin : true});
    }
    res.json(mostrarLogin = {mostrarLogin: false})
});


app.get('/login', (req,res) =>{
    let email = req.body.email;
    let senha = req.body.senha;
    var isValidUser = false;
    let sql = 'SELECT * FROM usuario';
    let query = db.query(sql, (err, results)=>{
        if(err) throw err;
        results.forEach(resultado(function(result){
            if(result.email == email && result.senha == senha){
                isValidUser = true;
            }
        })
        );
    });
    if(isValidUser){
        var cookie = req.cookies.email;
        if (cookie === undefined){
            res.cookie("email",email, { 
                expires: new Date(Date.now()+10000),
                path: '/' });
            console.log('cookie criado');
    res.sendFile(path.join(__dirname + '/public/index.html'));
            }
        }
        res.json(erro = {
            errorLogin : "Usuario ou senha incorretos"
        });
});

app.post('/cadastro', (req, res) => {
    var email = req.body.email;
    var senha = req.body.senha;

    let post = {email: req.body.email , senha: req.body.senha};
    let sql = 'INSERT INTO nomeTabela SET ?';
    let query = db.query(sql, post, (err, result) =>{
        if(err) throw err;
        console.log(result);
        var cookie = req.cookies.email;
        if (cookie === undefined){
            res.cookie("email",email, { 
                expires: new Date(Date.now()+10000),
                path: '/' });
            console.log('cookie criado');
    res.sendFile(path.join(__dirname + '/public/index.html'));
            }
});
});



const port = process.env.PORT || 8080;
app.listen(port);
console.log("App now running on port", port);

  //connection.end();