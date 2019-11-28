function recuperarVida(jogador, turnos, qtde){};
function aumentarAtaque(jogador, turnos, qtde){};
function aumentarDefesa(jogador, turnos, qtde){};


function atributos(atk, mag, def, defm){
    return {
        ataque: atk,
        magia: mag,
        defesa: def,
        defesam: defm
    };
}

module.exports = {
    recuperarVida: recuperarVida,
    aumentarAtaque: aumentarAtaque,
    aumentarDefesa: aumentarDefesa,
    atributos: atributos
}
