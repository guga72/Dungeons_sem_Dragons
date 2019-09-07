const Usuario = require('./Usuario.js');

test('usuario deve ter um nome', () => {
    const usuario = new Usuario('Fujiro Kakombi');
    expect(usuario.getNome()).toBe('Fujiro Kakombi');
});