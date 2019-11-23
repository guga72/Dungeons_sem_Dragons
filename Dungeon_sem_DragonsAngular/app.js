const express = require('express');
const app = express();
var bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
const path = require('path');

app.use(express.static(__dirname +"/public"));
//app.use(bodyParser.json());

app.get('/contactlist', (req,res)=>{
    console.log("teste");
    person1 = {
        name : 'tim',
        email : 'Teste@teste.com',
        number : '99999999'
    };

    person2 = {
        name : 'tim2',
        email : 'Teste@teste2.com',
        number : '999999992'
    };

    var contactlist = [person1, person2];
    res.json(contactlist);
});

app.listen(port, () => {
    console.log(`O app está rodando na porta ${port}`);
});