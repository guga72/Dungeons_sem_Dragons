//const Personagem = require('./../../js/Personagem.js').default;
const assert = require('assert');
const { Given, When, Then } = require('cucumber');

//const Personagem = require('./../../js/Personagem.js');
const Personagem = require('./../../js/Personagem.js');
//import Personagem from './../../js/Personagem.js';
var personagem;

function cria_personagem(pNome, pSexo, pRaca) {
    
}

Given('Jogador define - Nome: {string} Sexo: {string} Raca: {string}', function (nome, sexo, raca) {
    this.nome = nome;
    this.sexo = sexo;
    this.raca = raca;
});

When('Jogador cria personagem', function () {
    //personagem = new Personagem(this.nome, this.sexo, this.raca);
    personagem =  new Personagem(this.nome, this.sexo, this.raca);
});

Then('Personagem do jogador e criado', function () {
    assert.equal(personagem.getNome(), this.nome);
    assert.equal(personagem.getSexo(), this.sexo);
    assert.equal(personagem.getRaca(), this.raca);
    assert.equal(personagem.getLevel(), 1);
});