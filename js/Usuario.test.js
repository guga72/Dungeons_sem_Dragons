const Usuario = require('./Usuario.js');

test('usuario deve ter um nome', () => {
    const usuario = new Usuario('Fujiro Kakombi');
    expect(usuario.getNome()).toBe('Fujiro Kakombi');
});

test('usuario deve ter id', () => {
    const usuario = new Usuario('Enzo', 'rockandroll');
    expect(usuario.getId()).toBe('rockandroll');
});

test('usuario deve ter senha', () => {
    const usuario = new Usuario('Tiago', 'hiuaehheu', '12345678');
    expect(usuario.getSenha()).toBe('12345678');
});

test('usuario deve poder ter personagem', () => {
    const usuario = new Usuario('Tiago', 'xxPussySlayerxx', '12345678');
    usuario.criarPersonagem('NoobSaibot', 'Masculino');
    
    expect(usuario.personagem.getNome()).toBe('NoobSaibot');
});