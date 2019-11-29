import React, { Component } from 'react';
import '../../App.css'

export default class Game extends React.Component {
    constructor(props){
        super(props);

        this.state = {
          };

    }

    render(){
        return(
            <div className="App">
              <div className="game">
                  <div className="game-tela">
                      <div className="imagem" style={{/*backgroundImage: 'url('+ this.state.cenario.background+')'*/}}>
                          <div className="caixa-dialogo">
                              <h3>Tiozinho da Sidequest</h3>
                              <p>HERÓI, ATENTA-TE, ROVBARAM-ME DVAS COCADAS. PARTA A FACE DO RVFIÃO DEGENERADO E DAR-TE-EI VMA DAS COCADAS </p>
                          </div>
                      </div>
                  </div>
                  <div className="opcoes">
                      <div className="opcoes-box">
                          <div className="game-opcao">Tomar caminho da esquerda</div>
                          <div className="game-opcao">Tomar caminho da direita</div>
                          <div className="game-opcao">Descansar</div>
                          <div onClick={this.props.combateHandler} className="game-opcao">Atacar Dragão</div>
                      </div>
                  </div>
              </div>
            </div>
        );
    }
}
