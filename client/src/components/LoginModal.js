import React, { Component } from 'react';
import './LoginModal.css'

export default class LoginCadastro extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            erro : "",
            usuario: {
                email: null,
                senha: null
            }
        }
    }

    Login(data){
        var login = fetch('/login', {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({login: data})
                });
                if(login.errorLogin == undefined){
                    console.log("Deu bom");
                }
                else{
                    this.setState({
                        erro : login.erroLogin
                    })
                    console.log("Deu ruim");
                }
    }
    handleSubmitForm = e => {
        e.preventDefault();
        const {loginModalHandler} = this.props;
        loginModalHandler(this.state.usuario);

    }

    handleChange = e =>{
        this.setState({
            usuario:{
                ...this.state.usuario,
                [e.target.name]: e.target.value
            }
        });
        console.log(this.state.usuario)
    }

    render(){
        return(
            <div className="App">
                <div className="modal-bg">
                    <div className="modal">
                        <div className="boxes">
                            <div className="login-box login-cadastro-box">
                                <h3>Login</h3>
                                <form onSubmit={this.handleSubmitForm}>
                                    <input type="email" placeholder='email' name="email" onChange={this.handleChange}/>
                                    <input type="password" placeholder='senha' name="senha" onChange={this.handleChange}/>
                                    <button className="botao login-button" type="submit">Login</button>
                                </form>
                            </div>
                            <div className="cadastro-box login-cadastro-box">
                                <h3>Cadastro</h3>
                                <form action="#">
                                    <input type="email" placeholder='email'/>
                                    <input type="password" placeholder='senha'/>
                                    <button className="botao cadastro-button" type="submit">Cadastrar</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}