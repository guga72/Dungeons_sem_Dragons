import React, { Component } from 'react';
import { login, cadastro } from './functionsUsuario'
import './LoginModal.css'
import SweetAlert from 'sweetalert2-react';

export default class LoginCadastro extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            erro : false,
            email: '',
            senha: ''
        }

        this.onChange1 = this.onChange1.bind(this)
        this.onChange2 = this.onChange2.bind(this)
        this.onSubmitLogin = this.onSubmitLogin.bind(this)
        this.onSubmitCadastro = this.onSubmitCadastro.bind(this)
    }

    onChange1(event) {

        const value = event.target.value;
        const name = event.target.name;
      
        this.setState({
          [name]: value
        });
      }

      onChange2(event) {

        const value = event.target.value;
        const name = event.target.name;
      
        this.setState({
          [name]: value
        });
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
            }else{
                this.setState({
                    erro: true
                })
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
                            <SweetAlert
                            show={this.state.erro}
                            title="Erro"
                            text="Senha ou Email de usuário errados"
                            onConfirm={() => this.setState({erro: false})}/>
                            <div className="login-box login-cadastro-box">
                                <h3>Login</h3>
                                <form noValidate onSubmit={this.onSubmitLogin}>
                                    <input 
                                        type="email"
                                        placeholder='email'
                                        name="email"
                                        onChange={this.onChange1}/>

                                    <input
                                        type="password"
                                        placeholder='senha'
                                        name="senha"
                                        onChange={this.onChange1}/>

                                    <button className="botao login-button" type="submit">Login</button>
                                </form>
                            </div>
                            <div className="cadastro-box login-cadastro-box">
                                <h3>Cadastro</h3>
                                <form noValidate onSubmit={this.onSubmitCadastro}>
                                    <input 
                                        type="email"
                                        name="email"
                                        placeholder='email'
                                        onChange={this.onChange2}/>

                                    <input 
                                        type="password"
                                        name="senha"
                                        placeholder='senha'
                                        onChange={this.onChange2}/>

                                    <button className="botao cadastro-button" type="submit">Cadastrar</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )}
}
