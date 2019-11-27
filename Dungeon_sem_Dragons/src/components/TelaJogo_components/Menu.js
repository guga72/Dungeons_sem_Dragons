import React, { Component } from 'react';
import '../../App.css'
import cenarios from '../../instancias'

export default class Menu extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            cenario: cenarios.cenarioInicial
          };
    
        //this.criarSessaoNPCs = this.criarSessaoNPCs.bind(this);
        //this.criarSessaoLigacoes = this.criarSessaoLigacoes.bind(this);
    }

/*
    criarSessaoNPCs(){
      
        let c = this.state.cenario;
        let listanpc = [];
        for(let i in c.npcs){
          listanpc.push(<li className="item-sessao">{i.nome}</li>)
        }
  
        return listanpc;
  }
    criarSessaoLigacoes(){
      let c = this.state.cenario
      let listaligacoes = [];
      for(let i in c.ligacoes){
        listaligacoes.push(<li className="item-sessao">{i.nome}</li>)
        }
      return listaligacoes;
    }
  
*/
    render(){

        //let ligacoesLista = []
       //let npcsLista = []
  /*
        for(let i = 0; i < this.state.cenario.ligacoes.length; i++){
        ligacoesLista.push(this.state.cenario.ligacoes[i].nome)
*/
        return(
            <div className="App">
                <div className="menu">
                  <h1 className="menu-titulo">Menu do Jogo</h1>
                  <div className="sessoes">
                      <div className="sessao">
                        NPCs
                        <h1>{/*this.state.cenario.nome*/}</h1>
                        <ul>
                          {/*this.criarSessaoNPCs()*/}
                        </ul>
                          
                      </div>
                      
                      <div className="sessao">
                          Passagens
                          <ul>
                          {/*this.criarSessaoLigacoes()*/}
                          </ul>

                          {
                          /*
                              <div className="item-sessao">Taberna do Bigode</div>
                              <div className="item-sessao">Casa dos Caraglios</div>
                              <div className="item-sessao">Castelo Doido</div>
                            */
                          }
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
            </div>
        );
    }
}
