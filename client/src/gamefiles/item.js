const atributos = require('./atributos');

const item = (nome, preco, consumivel, equipavel) => {
    return {
        nome: nome,
        preco: preco,
        consumivel: consumivel,
        equipavel: equipavel
    }
}



//características e comportamentos de itens consumíveis
const consumivel = (efeito) => {
    return {
        efeito: comporEfeito()
    }
}

const itemEquipavel = (item, atq, def, mag, defm, eqpSlot) => {
    atributosEquipavel = {
        ataque: atq,
        defesa: def,
        magia: mag,
        defesam: defm, 
        eqpSlot:eqpSlot
    }
    return Object.assign(
        item,
        atributosEquipavel
    )
}



module.exports = {
    item: item,
    itemEquipavel: itemEquipavel
}