const Cenarios = require('./gamefiles/mapa');
const Npcs = require('./gamefiles/npc')
const Personagens = require('./gamefiles/personagens');

const persona = Personagens.personagemJogador("Nome do Personagem", "Masculino");

const cenarioInicial = Cenarios.cenario('TESTE NOME CENARIOINICIAL', false, './img/cenarioInicial.jpg');
const segundoCenario = Cenarios.cenario('Segundo Cenário', true, './img/cenario2teste.jpg');

const npc1 = Npcs.npc("Teste de NPC 1", "Teste dialogo NPC 1", ["Teste de Resposta 1", "Teste de resposta 2"]);
const npc2 = Npcs.npc("Teste de NPC 2", "Teste dialogo NPC 2", ["Teste de Resposta 1 ao Npc 2", "Teste de resposta 2 ao Npc 2"]);


cenarioInicial.ligacoes.push(segundoCenario)
cenarioInicial.npcs.push(npc1)
cenarioInicial.npcs.push(npc2)

segundoCenario.ligacoes.push(cenarioInicial)

//PERSONAGEM

const cenarios = {
    cenarioInicial,
    segundoCenario
}

export default cenarios;