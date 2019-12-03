import axios from 'axios'

export const cadastro = novoUsuario => {
    return axios
    .post('usuario/cadastro',{
        email: novoUsuario.email,
        senha: novoUsuario.senha

    })
    .then(res => {
        console.log("Registrado")
    })
}

export const login = usuario => {
    return axios
    .post('usuario/login', {
        email: usuario.email,
        senha: usuario.senha
    })
    .then(res => {
        localStorage.setItem('usertoken', res.data)
        return res.data
    })
    .catch(err => {
        console.log(err)
    })
}