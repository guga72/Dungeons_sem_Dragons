const atributos = require('./atributos');

const Orc = () => {};
const Elfo = () => {};
const Humano = () => {};

/*
    É possível adicionar características raciais únicas usando as arrow functions acima e adicionando as chamadas aqui embaixo.

*/

function comporRaca(raca){
    switch(raca){
        case "Orc":
            atributos.atributos = (3,0,3,0);
            break;
        case "Elfo":
            atributos.atributos = (0,3,0,3);
            break;
        case "Humano":
            atributos.atributos = (2,1,2,1);
            break;
    }
    return {
        raca: raca,
        atributos: atributos.atributos
    };
}

module.exports = {
        comporRaca: comporRaca
}