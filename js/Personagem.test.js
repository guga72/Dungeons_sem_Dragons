const Personagem = require('./Personagem.js');

test('personagem deve ter um nome', () => {
    const personagem = new Personagem('Fujiro Kakombi');
    expect(personagem.getNome()).toBe('Fujiro Kakombi');
});


test('personagem deve ter um sexo', () => {
    const personagem = new Personagem('Fujiro Kakombi', 'Feminino');
    expect(personagem.getSexo()).toBe('Feminino');
});

test('personagem deve ter atributos', () => {
    const personagem = new Personagem('Fujiro Kakombi', 'Feminino');
    expect(personagem.getAtributos()).toStrictEqual(
        {
            "Agilidade": 0,
            "Constituição": 0,
            "Força": 0,
            "Inteligência": 0,
            "Destreza": 0,
            "Carisma": 0
        }
    );
});

