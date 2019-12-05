export const PegarClasse = classe =>{
    return axios
    .get('classe/getClasse',{
        nome: classe.nome
    })
    .then(res => {
        return res.data
    })
}