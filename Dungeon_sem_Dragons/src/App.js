import React from 'react';
import logo from './logo.svg';
import './App.css';
import cenarioInicial from './gamefiles/instancias'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        tela: cenarioInicial
      };
  }

  render() {
    return (
      <div className="App">
              <div className="menu">
                  <h1 className="menu-titulo">Menu do Jogo</h1>
                  <div className="sessoes">
                      <div className="sessao">
                          NPCs
                          <div className="item-sessao">Tiozinho</div>
                          <div className="item-sessao">Nóia</div>
                          <div className="item-sessao">Guerreiro Bolado</div>
                      </div>
                      
                      <div className="sessao">
                          Passagens
                          <div className="item-sessao">Taberna do Bigode</div>
                          <div className="item-sessao">Casa dos Caraglios</div>
                          <div className="item-sessao">Castelo Doido</div>
                      </div>
                      <div className="sessao">
                          Sessao
                          <div className="item-sessao">c</div>
                          <div className="item-sessao">d</div>
                          <div className="item-sessao">e</div>
                      </div>
                      <div className="sessao">
                          Sessao
                          <div className="item-sessao">c</div>
                          <div className="item-sessao">d</div>
                          <div className="item-sessao">e</div>
                      </div>
                      
                      <div className="sessao">
                          Sessao
                          <div className="item-sessao">c</div>
                          <div className="item-sessao">d</div>
                          <div className="item-sessao">e</div>
                      </div>
                      <div className="sessao">
                          Sessao
                          <div className="item-sessao">c</div>
                          <div className="item-sessao">d</div>
                          <div className="item-sessao">e</div>
                      </div>
                  </div>
                  <div className="status-personagem">
                      <h3 className="nome-personagem">Nome do Personagem</h3>
                      <div className="statsbox">
                          <h5>Vida:</h5>
                          <h5>Ataque:</h5>
                          <h5>Defesa:</h5>
                          <h5>Magia</h5>
                          <h5>Defesa Mágica:</h5>
                      </div>
                  </div>
              </div>
              <div className="game">
                  <div className="game-tela">
                      <div className="imagem" style={{backgroundImage: 'url('+cenarioInicial.background+')'}}>
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

export default App;
