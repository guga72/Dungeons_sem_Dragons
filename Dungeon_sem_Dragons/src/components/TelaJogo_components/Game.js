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
                              <h3>Tiozinho</h3>
                              <p>Vai uma cocada aí, seu fiadaputa?</p>
                          </div>
                      </div>
                  </div>
                  <div className="opcoes">
                      <div className="opcoes-box">
                          <div className="game-opcao">Comprar cocada</div>
                          <div className="game-opcao">Roubar tiozinho</div>
                          <div className="game-opcao">Matar o tiozinho</div>
                          <div className="game-opcao">Pedir emprego pro tiozinho</div>
                      </div>
                  </div>
              </div>
            </div>
        );
    }
}
