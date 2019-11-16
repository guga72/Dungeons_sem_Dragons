'use strict'

import React from 'react';
import ReactDOM from 'react-dom';
//const domContainer = document.querySelector('#main');
const cenarios = require('../../../js/mapa')

class gamePage extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          //tela: cenarioInicial
        };
    }
  
    render() {
        return (
            <div>
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
                    <div className="imagem">
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
            /*
                <label id="topEmail"></label>
                <section className="hero is-black is-fullheight">
                    <div className="buttons">
                        <div id="emailuser" className="button is-dark"></div>
                        <div className="button is-dark">b</div>
                        <div className="button is-dark">c</div>
                        <div className="button is-dark">d</div>
                    </div>
                    <div className="tile is-ancestor">
                        <div className="tile is-vertical is-2">
                            <div className="tile is-parent is-vertical">
                                <article className="tile is-child notification is-dark">

                                <menuCenario/>
                                </article>
                            </div>
                        </div>
                        <div className="tile is-vertical is-8">
                            <div className="tile is-parent">
                                <article className="tile is-child notification is-danger">
                                    <p className="title">Tela do Jogo</p>
                                    <p className="subtitle">Aqui vão as imagens do jogo</p>
                                    <div className="main" id="main">
                                        <!-- Content -->
                                    </div>
                                </article>
                            </div>
                        </div>
                        <div className="tile is-parent">
                            <article className="tile is-child notification is-dark">
                                <div className="content">
                                    <p className="title">Outras Opções</p>
                                    <p className="subtitle">With even more content</p>
                                    <div className="content">

                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                </section>
                <script type="text/javascript">
                    window.onload = function(req, res){
                        var emailLabel = document.getElementById('emailuser');
                        var usuario = document.cookie.substring(document.cookie.indexOf('email=')+6) //pega depois que aparece o 'email=' na string do cookie
                        usuario = usuario.replace("%40","@"); // troca o valor do %40 por @ para aparecer o emial bonitinho
                        emailLabel.innerText = usuario; // insere o email na label
                    }
                    
                </script>
                <script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>
                <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>
                <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
                <script type="text/babel" src="../js/board.js"></script>
                */
        );
    }
  }

  export default gamePage;
  //ReactDOM.render(<gamePage />, domContainer);