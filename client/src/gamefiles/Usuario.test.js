const Usuario = require('./Usuario');

test('compor raca do personagem', () => {
    let user = new Usuario("x", "x");
    user.criarPersonagemJogador("X", "X", "Orc", "Ladino");
    expect(user.personagens[0].raca).toBe("Orc");
});

test('compor classe do personagem', () => {
    let user = new Usuario("x", "x");
    user.criarPersonagemJogador("X", "X", "Orc", "Ladino");
    expect(user.personagens[0].classe).toBe("Ladino");
});

test('compor arma equipavel do personagem', () => {
    let user = new Usuario("x", "x");
    user.criarPersonagemJogador("X", "X", "Orc", "Ladino");
    expect(user.personagens[0].armas_equipaveis).toBe("adaga");
});

test('criar usuario', ()=>{
    let user = new Usuario("nome", "senha");
    expect(user.email).toBe("nome");
})

test('criar usuario', ()=>{
    let user = new Usuario("nome", "senha");
    expect(user.senha).toBe("senha");
})
