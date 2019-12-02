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
                <div className="modal-bg modal2">
                    <div className="modal">
                        <div className="form-box">
                            <form>
                                <input className="input2" type="text" placeholder="Nome do personagem" name="nome"/>
                                <div className="sexo">
                                    <p>Sexo:</p>
                                    <label htmlFor="r1"> Masculino</label>
                                    <input type="radio" id="r1" name="sexo" value="Masculino"/>
                                    <label htmlFor="r1"> Feminino</label>
                                    <input type="radio" id="r2" name="sexo" value="Feminino"/>
                                </div>
                                <select id="Raca" name="Raça" defaultValue="Raça">
                                    <option>Elfo</option>
                                    <option>Humano</option>
                                    <option>Orc</option>
                                </select>

                                <select id="Classe" name="Classe" defaultValue="Classe">
                                    <option>Guerreiro</option>
                                    <option>Arqueiro</option>
                                    <option>Ladino</option>
                                    <option>Evangélico</option>
                                </select>

                                <button onClick={this.props.criacaoCharHandler} className="botao login-button" type="submit">Criar</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}