const Usuario = require('./Usuario.js');

test('usuario deve ter um nome', () => {
    const usuario = new Usuario('Fujiro Kakombi');
    expect(usuario.getNome()).toBe('Fujiro Kakombi');
});

test('usuario deve ter id', () => {
    const usuario = new Usuario('Ayres', 'xxPussySlayerxx');
    expect(usuario.getId()).toBe('xxPussySlayerxx');
});

test('usuario deve ter senha', () => {
    const usuario = new Usuario('Oskar', 'BridgeBuildah', 'gobuildabridge');
    expect(usuario.getSenha()).toBe('gobuildabridge');
});