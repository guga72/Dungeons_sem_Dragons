const atributos = require('./atributos');

function inimigo(nome, hp, atk, def, mag, defm){
    return {
        nome: nome,
        hp: hp,
        ataque: atk,
        defesa: def,
        magia: mag,
        defesaM: defm
    }
}

module.exports = {
    inimigo: inimigo
}