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
                          <div className="game-opcao">Matar rufião e resgatar cocadas</div>
                          <div className="game-opcao">Matar rufião e comer as cocadas</div>
                          <div className="game-opcao">Matar as cocadas e comer o rufião</div>
                          <div className="game-opcao">Fingir que não entende português</div>
                      </div>
                  </div>
              </div>
            </div>
        );
    }
}
