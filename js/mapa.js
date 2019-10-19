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

function cenario(nome, ligacoes, npcs, inimigos) {
    return{
        nome: nome,
        ligacoes: ligacoes,//[cenarios]
        npcs: npcs, //[npcs]
        inimigos: inimigos//[inimigos]
    }
}

