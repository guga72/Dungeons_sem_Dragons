import React, { Component } from 'react';
import './LoginModal.css'
//import '../gamefiles/Usuario'

export default class TelaPersonagemModal extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            nome: null,
            sexo: null,
            raca: null,
            classe: null
        };

    }

    criarUsuario(){
        
    }

    render(){
        return(
            <div className="App">
                <div class="modal-bg modal2">
                    <div class="modal">
                        <div class="form-box">
                            <form>
                                <input class="input2" type="text" placeholder="Nome do personagem" name="nome"/>
                                <div class="sexo">
                                    <p>Sexo:</p>
                                    <label for="r1"> Masculino</label>
                                    <input type="radio" id="r1" name="sexo" value="Masculino"/>
                                    <label for="r1"> Feminino</label>
                                    <input type="radio" id="r2" name="sexo" value="Feminino"/>
                                </div>
                                <select id="Raca" name="Raça">
                                    <option selected disabled>Raça</option>
                                    <option>Elfo</option>
                                    <option>Humano</option>
                                    <option>Orc</option>
                                </select>

                                <select id="Classe" name="Classe">
                                    <option selected disabled>Classe</option>
                                    <option>Guerreiro</option>
                                    <option>Arqueiro</option>
                                    <option>Ladino</option>
                                    <option>Evangélico</option>
                                </select>

                                <button onClick={this.props.criacaoCharHandler} class="botao login-button" type="submit">Criar</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}