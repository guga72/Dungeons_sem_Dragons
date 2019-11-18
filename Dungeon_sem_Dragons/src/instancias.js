const Cenarios = require('./gamefiles/mapa');

const cenarioInicial = Cenarios.cenario('Cenário Inicial', false, './img/cenarioInicial.jpg');
const segundoCenario = Cenarios.cenario('Segundo Cenário', true, './img/cenario2teste.jpg');

cenarioInicial.ligacoes.push(segundoCenario)

segundoCenario.ligacoes.push(cenarioInicial)

const cenarios = {
    cenarioInicial,
    segundoCenario
}

export default cenarios;