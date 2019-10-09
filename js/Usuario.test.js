const Usuario = require('./Usuario.js');

test('usuario deve ter um nome', () => {
    const usuario = new Usuario('Fujiro Kakombi', 'pussyslayer@x.com', '12345678');
    expect(usuario.nome).toBe('Fujiro Kakombi');
});

test('usuario deve ter email', () => {
    const usuario = new Usuario('Enzo', 'what@aaa.com', '12345678');
    expect(usuario.email.toBe('what@aaa.com');
});

test('usuario deve ter senha', () => {
    const usuario = new Usuario('Tiago', 'hiuaehheu@d.com', '12345678');
    expect(usuario.senha.toBe('12345678');
});

test('usuario deve poder ter personagem', () => {
    const usuario = new Usuario('Tiago', 'akajei@asdij.com', '12345678');
    usuario.criarPersonagem('NoobSaibot', 'Masculino');
    
    expect(usuario.personagens[0].nome).toBe('NoobSaibot');
});

