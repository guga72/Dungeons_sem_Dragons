'use strict'

const domContainer = document.querySelector('#main');
//const cenarios = require('../../js/mapa');

class LikeButton extends React.Component {
    constructor(props) {
      super(props);
      this.state = { tela: 'Castelo_Phyton-Comeco_do_jogo' };

      this.changeTelaState = this.changeTelaState.bind(this);
      this.handleChange= this.handleChange.bind(this);
    }

    changeTelaState(e) {

      this.setState({ tela: 'Trono_Castelo_Pyton-Comeco_do_jogo' })
    }
  
    handleChange(e) {
      this.setState({ tela: e.target.value });
    } 

    render() {
      if (this.state.tela == 'Castelo_Phyton-Comeco_do_jogo') {
        return (
          <center>
            <h1>Tela State = {this.state.tela}</h1>
             <img src="../imagens/Castelo_Phyton_da_Colina.jpg" /> 
             <input defaultValue="0" id="my1" onClick={this.handleChange} ></input>
             <button onClick={this.changeTelaState}>test</button>
              <p><a href="javascript:CasteloPhyton1Button1();" >Bottom Text</a></p>
          </center>   
        );
      }

      if (this.state.tela == 'Trono_Castelo_Pyton-Comeco_do_jogo') {
       return (
          <center>
            <h1>Tela State = {this.state.tela}</h1>
           <img src="../imagens/Sala_do_Trono.jpg" />
           <button onClick={this.changeTelaState} >test</button>
          </center>     
        );
      }
    }
  }

  ReactDOM.render(<LikeButton />, domContainer);