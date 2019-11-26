import React, { Component } from 'react';
import './LoginModal.css'

export default class LoginCadastro extends React.Component {
    constructor(props){
        super(props);

    }

    render(){
        return(
            <div className="App">
                <div class="modal-bg">
                    <div class="modal">
                        <div class="boxes">
                            <div class="login-box login-cadastro-box">
                                <h3>Login</h3>
                                <form>
                                    <input type="email" placeholder='email'/>
                                    <input type="password" placeholder='senha'/>
                                    <button class="login-button" type="submit">Login</button>
                                </form>
                            </div>
                            <div class="cadastro-box login-cadastro-box">
                                <h3>Cadastro</h3>
                                <form>
                                    <input type="email" placeholder='email'/>
                                    <input type="password" placeholder='senha'/>
                                    <button class="cadastro-button" type="submit">Cadastrar</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}