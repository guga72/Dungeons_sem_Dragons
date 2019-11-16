'use strict'

const domContainer = document.querySelector('#main');
const cenarios = require('../../../js/mapa')

class gamePage extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          tela: cenarioInicial
        };
    }
  
    render() {
        return (
            <div>
            <div class="menu">
                <h1 class="menu-titulo">Menu do Jogo</h1>
                <div class="sessoes">
                    <div class="sessao">
                        NPCs
                        <div class="item-sessao">Tiozinho</div>
                        <div class="item-sessao">Nóia</div>
                        <div class="item-sessao">Guerreiro Bolado</div>
                    </div>
                    
                    <div class="sessao">
                        Passagens
                        <div class="item-sessao">Taberna do Bigode</div>
                        <div class="item-sessao">Casa dos Caraglios</div>
                        <div class="item-sessao">Castelo Doido</div>
                    </div>
                    <div class="sessao">
                        Sessao
                        <div class="item-sessao">c</div>
                        <div class="item-sessao">d</div>
                        <div class="item-sessao">e</div>
                    </div>
                    <div class="sessao">
                        Sessao
                        <div class="item-sessao">c</div>
                        <div class="item-sessao">d</div>
                        <div class="item-sessao">e</div>
                    </div>
                    
                    <div class="sessao">
                        Sessao
                        <div class="item-sessao">c</div>
                        <div class="item-sessao">d</div>
                        <div class="item-sessao">e</div>
                    </div>
                    <div class="sessao">
                        Sessao
                        <div class="item-sessao">c</div>
                        <div class="item-sessao">d</div>
                        <div class="item-sessao">e</div>
                    </div>
                </div>
                <div class="status-personagem">
                    <h3 class="nome-personagem">Nome do Personagem</h3>
                    <div class="statsbox">
                        <h5>Vida:</h5>
                        <h5>Ataque:</h5>
                        <h5>Defesa:</h5>
                        <h5>Magia</h5>
                        <h5>Defesa Mágica:</h5>
                    </div>
                </div>
            </div>
            <div class="game">
                <div class="game-tela">
                    <div class="imagem">
                        <div class="caixa-dialogo">
                            <h3>Tiozinho</h3>
                            <p>Vai uma cocada aí, seu fiadaputa?</p>
                        </div>
                    </div>
                </div>
                <div class="opcoes">
                    <div class="opcoes-box">
                        <div class="game-opcao">Comprar cocada</div>
                        <div class="game-opcao">Roubar tiozinho</div>
                        <div class="game-opcao">Matar o tiozinho</div>
                        <div class="game-opcao">Pedir emprego pro tiozinho</div>
                    </div>
                </div>
            </div>
            </div>
            /*
                <label id="topEmail"></label>
                <section class="hero is-black is-fullheight">
                    <div class="buttons">
                        <div id="emailuser" class="button is-dark"></div>
                        <div class="button is-dark">b</div>
                        <div class="button is-dark">c</div>
                        <div class="button is-dark">d</div>
                    </div>
                    <div class="tile is-ancestor">
                        <div class="tile is-vertical is-2">
                            <div class="tile is-parent is-vertical">
                                <article class="tile is-child notification is-dark">

                                <menuCenario/>
                                </article>
                            </div>
                        </div>
                        <div class="tile is-vertical is-8">
                            <div class="tile is-parent">
                                <article class="tile is-child notification is-danger">
                                    <p class="title">Tela do Jogo</p>
                                    <p class="subtitle">Aqui vão as imagens do jogo</p>
                                    <div class="main" id="main">
                                        <!-- Content -->
                                    </div>
                                </article>
                            </div>
                        </div>
                        <div class="tile is-parent">
                            <article class="tile is-child notification is-dark">
                                <div class="content">
                                    <p class="title">Outras Opções</p>
                                    <p class="subtitle">With even more content</p>
                                    <div class="content">

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

  ReactDOM.render(<gamePage />, domContainer);