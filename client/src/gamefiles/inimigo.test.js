const Inimigo = require('./inimigo');

test('inimigo criação correta', () => {
    let enemy = Inimigo.inimigo('inimigo', 200, 5, 2, 1, 1);
    
    expect(enemy.hp).toBe(200);
});

test('inimigo criação correta', () => {
    let enemy = Inimigo.inimigo('inimigo', 200, 5, 2, 1, 1);
    
    expect(enemy.nome).toBe('inimigo');
});

test('inimigo criação correta', () => {
    let enemy = Inimigo.inimigo('inimigo', 200, 5, 2, 1, 1);
    
    expect(enemy.ataque).toBe(5);
});

test('inimigo criação correta', () => {
    let enemy = Inimigo.inimigo('inimigo', 200, 5, 2, 1, 1);
    
    expect(enemy.defesa).toBe(2);
});

test('inimigo criação correta', () => {
    let enemy = Inimigo.inimigo('inimigo', 200, 5, 2, 1, 1);
    
    expect(enemy.magia).toBe(1);
});
test('inimigo criação correta', () => {
    let enemy = Inimigo.inimigo('inimigo', 200, 5, 2, 1, 1);
    
    expect(enemy.defesaM).toBe(1);
});