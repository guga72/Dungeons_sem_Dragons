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

const equipavel = (cls, atq, def) => {
    return {
        classe: cls,
        ataque: atq,
        defesa: def
    }
}


const comporItem = (item) => {
    let csmv = {};
    let eqpv = {};
    if (item.equipavel == true){
        csmv = consumivel();
    }
    if (item.equipavel == true){
        eqpv = equipavel();
    }
    return Object.assign(
        item,
        csmv,
        eqpv
    );
}