import React, { Component } from 'react';
import './LoginModal.css'
import { criarPersonagem}  from './functionsPersonagem'
//import '../gamefiles/Usuario'

export default class TelaPersonagemModal extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            nome: '',
            sexo: '',
            raca: '',
            classe: '',
            classes : [],
            racas: []
        };
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }
    componentDidMount(){
        getClasse().then(res=>{
            if(res){
                this.setState({
                    classes: res.body.classes
                })
            }
        })
    }

    criarUsuario(){
        
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit(e){
        e.preventDefault()

        const personagem = {
            nome: this.state.nome,
            sexo: this.state.sexo,
            raca: this.state.raca,
            classe: this.state.classe
        }

        criarPersonagem(personagem).then(res => {
            if(res){
                this.props.personagemModalHandler();
            }
        })
    }

    render(){
        return(
            <div className="App">
                <div className="modal-bg modal2">
                    <div className="modal">
                        <div className="form-box">
                            <form onSubmit={this.onSubmit}>
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