import React, { Component } from 'react';
import { login, cadastro } from './userFunctions'
import './LoginModal.css'

export default class LoginCadastro extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            erro : "",
            email: '',
            senha: ''
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmitLogin = this.onSubmitLogin.bind(this)
        this.onSubmitCadastro = this.onSubmitCadastro.bind(this)
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmitLogin(e){
        e.preventDefault()

        const usuario = {
            email: this.state.email,
            senha: this.state.senha
        }

        login(usuario).then(res => {
            if(res){
                this.props.loginModalHandler();
            }
        })
    }

    onSubmitCadastro(e){
        e.preventDefault()

        const usuario = {
            email: this.state.email,
            senha: this.state.senha
        }

        cadastro(usuario).then(res => {
            if(res){
            }
        })
    }

    render(){
        return(
            <div className="App">
                <div className="modal-bg">
                    <div className="modal">
                        <div className="boxes">
                            <div className="login-box login-cadastro-box">
                                <h3>Login</h3>
                                <form noValidate onSubmit={this.onSubmitLogin}>
                                    <input type="email" placeholder='email' name="email" onChange={this.onChange}/>
                                    <input type="password" placeholder='senha' name="senha" onChange={this.onChange}/>
                                    <button className="botao login-button" type="submit">Login</button>
                                </form>
                            </div>
                            <div className="cadastro-box login-cadastro-box">
                                <h3>Cadastro</h3>
                                <form noValidate onSubmit={this.onSubmitCadastro}>
                                    <input type="email" placeholder='email' onChange={this.onChange}/>
                                    <input type="password" placeholder='senha'  onChange={this.onChange}/>
                                    <button className="botao cadastro-button" type="submit">Cadastrar</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )}
}
