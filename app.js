const express = require('express');
var cookieParser = require('cookie-parser');
const path = require('path');
var app = express();
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'client/build')));
var router = express.Router();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

    /*const mysql = require('mysql');
    const connection = mysql.createConnection({
        host: 'localhost',
        user : 'root',
        password: '123456',
        database: 'DsemD'
    });*/

    
    /*connection.connect((err) => {
        if (err) throw err;
        console.log('Connected!');
      });*/

      if(process.env.NODE_ENV === "production"){
          app.use(express.static('client/build'));

          app.get('*', (req, res) =>{
            res.sendFile(path.resolve(__dirname, "client/build/index.html"))
          });
      }

      app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname+'/client/public/index.html'));
      });

      router.get('/paginaInicial', (req, res) => {
    if(req.cookies.email == undefined){
        res.json(mostrarLogin = {mostrarLogin : true});
    }
    res.json(mostrarLogin = {mostrarLogin: false})
});

router.get('/logout'), (req,res) =>{
    res.clearCookie('email', {path : '/'}) ;
}


router.get('/login', (req,res) =>{
    let email = req.body.email;
    let senha = req.body.senha;
    var isValidUser = false;
    let sql = `SELECT * FROM usuario WHERE email = ${email}`;
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
            res.json(login = {
                login : true
            })
            }
        }
        res.json(login = {
            login : false
        });
});

router.post('/cadastro', (req, res) => {
    var email = req.body.email;
    var senha = req.body.senha;

    let select = `SELECT * FROM usuario WHERE email = ${email}`;
    let existeCliente = db.existeCliente(select, (err, results)=>{
        if(err) throw err;
        results.forEach(resultado(function(result){
            if(result.email == email){
                isValidUser = false;
                res.json(cadastro = {
                    erro : "Ja existe uma conta vinculada a este e-mail"
                });
            }
        })
        );
    });

    let post = {email: req.body.email , senha: req.body.senha};
    let sql = 'INSERT INTO usuarip SET ?';
    let query = db.query(sql, post, (err, result) =>{
        if(err) throw err;
        console.log(result);
        var cookie = req.cookies.email;
        if (cookie === undefined){
            res.cookie("email",email, { 
                expires: new Date(Date.now()+10000),
                path: '/' });
            console.log('cookie criado');
            }
});
});

router.delete('/deletePersonagem', (req, res) =>{
    let deletar = {email: req.email, persoangem : req.personagem};
    let sql = 'DELETE FROM personagem WHERE';
    let query = db.query(sql, deletar);
    res.json(deletar = {
        morrer : "Você morreu"
    });
});

const port = process.env.PORT || 8080;
app.listen(port);
console.log("App now running on port", port);

  //connection.end();