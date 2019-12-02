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
                <div className="modal-bg modal_combate">
                    <div className="modal">
                        <div className="info-col info1">
                            <h5>Vida: </h5>
                            <h5>Ataque: </h5>
                            <h5>Defesa: </h5>
                            <h5>Magia: </h5>
                            <h5>Defesa Mágica: </h5>
                            <h5>Gold: </h5>
                        </div>
                        <div className="imagem_ataque">
                            <div className="imagemCombate">
                            </div>
                            <div className="ataques">
                                <div onClick={this.props.combateHandler} className="ataque-basico"></div>
                            </div>
                        </div>
                        <div className="info-col info2">
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