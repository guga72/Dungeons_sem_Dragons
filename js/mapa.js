/*
Fazer grafo:
    cada nó deve representar um cenário
    cada cenário deve ter as seguintes propriedades:
        background
        NPCs
        atrai inimigos?
            inimigos: []
        nós vizinhos
*/


/*
    Locais:
        Tundra de Mofriaca
        Estalagem Pé-Cheiroso
        Guilda dos Ladrões
        Cidades Irmãs: 
        
*/

function cenario(nome, atraiInimigos) {
    return{
        nome: nome,
        ligacoes: [],//[cenarios]
        npcs: [], //[npcs]
        atraiInimigos, //true ou false
        inimigos: []//[inimigos][]
    }
}

const cenarioInicial = cenario('Cenário Inicial', false)
const segundoCenario = cenario('Segundo Cenário', true)