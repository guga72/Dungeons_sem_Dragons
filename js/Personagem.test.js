const Personagem = require('./Personagem.js');

test('personagem deve ter um nome', () => {
    const personagem = new Personagem('Fujiro Kakombi');
    expect(personagem.getNome()).toBe('Fujiro Kakombi');
});


test('personagem deve ter um sexo', () => {
    const personagem = new Personagem('Fujiro Kakombi', 'Feminino', 'Orc');
    expect(personagem.getSexo()).toBe('Feminino');
});

test('personagem deve ter uma raça', () => {
    const personagem = new Personagem('Fujiro Kakombi', 'Feminino', 'Orc');
    expect(personagem.getRaca()).toBe('Orc');
});

test('personagem deve ter level', () => {
    const personagem = new Personagem('Fujiro Kakombi', 'Feminino', 'Orc');
    expect(personagem.getLevel()).toBe(1);
});

test('personagem deve ter atributos', () => {
    const personagem = new Personagem('Fujiro Kakombi', 'Feminino', 'Orc');
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

