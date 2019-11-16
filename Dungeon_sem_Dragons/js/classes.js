function comporClasse(classe){
    let armas_eqp = null;
    switch(classe){
        case "Guerreiro":
            armas_eqp = "espada";
            break;
        case "Arqueiro":
            armas_eqp = "arco";
            break;
        case "Ladino":
            armas_eqp = "adaga";
            break;
        case "Evangélico":
            armas_eqp = "palmatoria";
            break;
    }
    return {
        classe: classe,
        armas_equipaveis: armas_eqp
    }
}

module.exports = {
    comporClasse: comporClasse
}