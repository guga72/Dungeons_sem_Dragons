export const PegarRaca = raca =>{
    return axios
    .get('classe/getRaca',{
        nome: raca.nome
    })
    .then(res => {
        return res.data
    })
}