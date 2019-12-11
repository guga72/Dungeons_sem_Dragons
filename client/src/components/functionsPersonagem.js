const axios = require('axios')

export const criarPersonagem = personagem => {
    var classe = axios.get('classe/getClasse',{
        classe: personagem.classe
    })
    .then(res => {return res.data})
    var raca = axios.get('raca/getRaca',{
       raca: personagem.raca
    }).then(res=> res.data)
    return axios
    .post('criarPersonagem', {
        nome: personagem.nome,
        sexo: personagem.sexo,
        classe: classe.id,
        raca: raca.id
    })
    .then(res => {
        localStorage.setItem('personagem', res.data)
        return res.data
    })
    .catch(err => {
        console.log(err)
    })
}