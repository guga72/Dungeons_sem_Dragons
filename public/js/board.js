'use strict'

const domContainer = document.querySelector('#main');
//const cenarios = require('../../js/mapa');

class LikeButton extends React.Component {
    constructor(props) {
      super(props);
      this.state = { tela: 'Castelo_Phyton-Comeco_do_jogo' };

      this.changeTelaState = this.changeTelaState.bind(this);
    }

    changeTelaState() {
      this.setState({ tela: 'Trono_Castelo_Pyton-Comeco_do_jogo' })
    }
  
    render() {
      if (this.state.tela == 'Castelo_Phyton-Comeco_do_jogo') {
        return (
          <center>
            <h1>Tela State = {this.state.tela}</h1>
             <img src="../imagens/Castelo_Phyton_da_Colina.jpg" /> 
             <button onClick={this.changeTelaState} >test</button>
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