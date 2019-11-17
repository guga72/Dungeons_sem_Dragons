function npc(nome, dialogo, opcoes){
    return{
        nome: nome,
        dialogo: dialogo,
        opcoes: opcoes
    }
}

module.exports = {
    npc: npc
}