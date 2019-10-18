'use strict'

const domContainer = document.querySelector('#main');

class LikeButton extends React.Component {
    constructor(props) {
      super(props);
      this.state = { tela: 'telaCastelo' };
    }
  
    render() {
      if (this.state.tela == 'telaCastelo') {
        return (
          <center>
            <img src="../imagens/Castelo_Phyton_da_Colina.jpg" /> 
          </center>
        );
      }
  
      return (
        <button onClick={() => this.setState({ tela1: 'true' })}>
          Like
        </button>
      );
    }
  }

  ReactDOM.render(<LikeButton />, domContainer);