const personagem = require('./personagens');

const Orc = () => {};
const Elfo = () => {};
const Humano = () => {};

/*
    É possível adicionar características raciais únicas usando as arrow functions acima e adicionando as chamadas aqui embaixo.

*/

function comporRaca(raca){
    switch(raca){
        case "Orc":
            personagem.atributos = (1,4,4,0,1,0);
            break;
        case "Elfo":
            personagem.atributos = (2,1,1,3,3,0);
            break;
        case "Humano":
            personagem.atributos = (2,2,2,2,1,1);
            break;
    }
    return {
        raca: raca,
        atributos: personagem.atributos
    };
}

module.exports = {
        comporRaca: comporRaca
}