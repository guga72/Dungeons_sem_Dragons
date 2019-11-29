import React, { Component } from 'react';
import './LoginModal.css'

export default class CombateModal extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }

    render(){
        return(
            <div className="App">
                <div class="modal-bg modal_combate">
                    <div class="modal">
                        <div class="info-col info1">
                            <h5>Vida: </h5>
                            <h5>Ataque: </h5>
                            <h5>Defesa: </h5>
                            <h5>Magia: </h5>
                            <h5>Defesa Mágica: </h5>
                            <h5>Gold: </h5>
                        </div>
                        <div class="imagem_ataque">
                            <div class="imagemCombate">
                            </div>
                            <div class="ataques">
                                <div onClick={this.props.combateHandler} class="ataque-basico"></div>
                            </div>
                        </div>
                        <div class="info-col info2">
                            <h3>Dragão</h3>
                            <h5>Vida: </h5>
                            <h5>Ataque: </h5>
                            <h5>Defesa: </h5>
                            <h5>Magia: </h5>
                            <h5>Defesa Mágica: </h5>
                        </div>
                    </div>
                </div>
            </div>
    );
    }
}