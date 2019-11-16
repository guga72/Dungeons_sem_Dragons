'use strict'

const domContainer = document.querySelector('#main');
//const cenarios = require('../../js/mapa');
//import * as button from './CasteloPhyton1/Button1'; 
const name = 'Josh Perez';
const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};
function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

function setBackGround() {
  return '../imagens/Castelo_Phyton-Comeco_do_jogo.jpg' + this.state.tela;
}

const element = (
  <div>
    <h1>Hello!</h1>
    <h2>Good to see you here.</h2>
  </div>
);
class LikeButton extends React.Component {
    constructor(props) {
      super(props);
      this.state = { tela: 'Castelo_Phyton-Comeco_do_jogo'};

      this.changeTelaState = this.changeTelaState.bind(this);
      this.handleChange= this.handleChange.bind(this);

      this.textInput = React.createRef();
      this.focusTextInput = this.focusTextInput.bind(this);
    }

    changeTelaState() {

      this.setState({ tela: 'Trono_Castelo_Pyton-Comeco_do_jogo' });
    }
  
    handleChange(e) {
      this.setState({ tela: e.target.value });
      //this.setState({ tela: 'Trono_Castelo_Pyton-Comeco_do_jogo' });
    } 

    focusTextInput() {
      // Explicitamente foca o input de texto usando a API do DOM diretamente
      // Nota: nós estamos acessando o campo "current" para obter um nó do DOM.
      this.textInput.current.focus();
    }

    //<img src={this.state.backGround} /> <br></br> <img src={setBackGround()} /> <br></br>

    render() {
//      if (this.state.tela == 'Castelo_Phyton-Comeco_do_jogo') {
        return (
          <center onLoad={CasteloPhyton1Button2}>
             <img src={'../imagens/' + this.state.tela + '.jpg'}/> <br></br>
             <input id="my1" onClick={(event) => { CasteloPhyton1Button1(); this.handleChange(event);}}></input>
             <button onClick={this.changeTelaState}>test</button>
             <button onClick={(event) => { CasteloPhyton1Button1(); this.changeTelaState();}}>test2</button>
             <p><a href="javascript:CasteloPhyton1Button1();" >Bottom Text</a></p>
             <button onclick="myFunction()">Click me</button>
    
             <h1>
                Hello, {formatName(user)}!
                {element}!

              </h1>
          </center>   
        );
//     }

      /*if (this.state.tela == 'Trono_Castelo_Pyton-Comeco_do_jogo') {
       return (
          <center>
            <h1>Tela State = {this.state.tela}</h1>
            <h1>Image State = {this.state.backGround}</h1><br></br>
           <img src="../imagens/Sala_do_Trono.jpg" />
           <button onClick={this.changeTelaState} >test</button>
          </center>     
        );
      }*/
    }
  }

  ReactDOM.render(<LikeButton />, domContainer);
  /*
 
 //import React from 'react';
 import React, {Component} from 'react'; 
 import ReactDOM from 'react-dom';
 
 class LikeButton extends React.Component {
   render() {
     return <h2>Hi, I am a Car!</h2>;
   }
 }
 
 export default App;
 ReactDOM.render(<LikeButton />, document.getElementById('main'));

*/