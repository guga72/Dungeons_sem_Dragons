import React, { Component } from 'react';
import '../../App.css'
import cenarios from '../../instancias'

export default class Menu extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            cenario: cenarios.cenarioInicial,
            personagem: cenarios.oba
          };
    
        this.criarSessaoNPCs = this.criarSessaoNPCs.bind(this);
        //this.criarSessaoLigacoes = this.criarSessaoLigacoes.bind(this);
    }

    criarSessaoNPCs(){
      
        let c = this.state.cenario.npcs;
        let listanpc = [];
        for(let i in c){
          listanpc.push(<li className="item-sessao">{i.nome}</li>)
        }
  
        return listanpc;
  }
  /*
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
                  <h3 class="nome-cenario">{this.state.cenario.nome}</h3>
                  <div className="sessoes">
                      <div className="sessao">
                        NPCs
                        <ul>
                          {this.criarSessaoNPCs()}
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
                  </div>
                  <div class="status-personagem">
                      <h3 class="nome-personagem">{this.state.personagem.nome}</h3>
                      <div class="statsbox">
                        <h5>Sexo: {this.state.personagem.sexo}</h5>
                        <h5>Raça: {this.state.personagem.raca.nome}</h5>
                        <h5>Level: {this.state.personagem.level}</h5>
                        <h5>Vida: {this.state.personagem.vida}</h5>
                        <h5>Ataque: {this.state.personagem.ataque}</h5>
                        <h5>Defesa: {this.state.personagem.defesa}</h5>
                        <h5>Magia: {this.state.personagem.magia}</h5>
                        <h5>Defesa Mágica: {this.state.personagem.defesaM}</h5>
                        <h5>Gold: {this.state.personagem.gold}</h5>
                      </div>
                  </div>
              </div>
            </div>
        );
    }
}
