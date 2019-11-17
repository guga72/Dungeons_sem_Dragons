const Cenarios = require('./mapa');

const cenarioInicial = Cenarios.cenario('Cenário Inicial', false, './img/cenarioInicial.jpg');
const segundoCenario = Cenarios.cenario('Segundo Cenário', true, './img/cenario2teste.jpg');

cenarioInicial.ligacoes.push(segundoCenario)

segundoCenario.ligacoes.push(cenarioInicial)