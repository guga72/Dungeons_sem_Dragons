import axios from 'axios'

export const criarPersonagem = personagem => {
    return axios
    .post('criarPersonagem', {
        nome: personagem.nome,
        sexo: personagem.sexo,
        classe: personagem.classe,
        raca: personagem.raca
    })
    .then(res => {
        localStorage.setItem('personagem', res.data)
        return res.data
    })
    .catch(err => {
        console.log(err)
    })
}