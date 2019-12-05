import React from 'react';
import './App.css';
import LoginCadastro from './components/LoginModal';
import TelaJogo from './components/TelaJogo';
import TelaPersonagemModal from './components/TelaPersonagemModal';
import CombateModal from './components/CombateModal'
import axios from 'axios';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mostrarLogin: true,
      mostrarCombate: false,
      temChar: false
    }
   // this.connectToServer = this.connectToServer.bind(this);
    this.loginModalHandler = this.loginModalHandler.bind(this);
    this.personagemModalHandler = this.personagemModalHandler.bind(this);
    this.combateHandler = this.combateHandler.bind(this);
  }

  loginModalHandler = () => {

        this.setState({
          mostrarLogin: false
        });
  }

  personagemModalHandler = () => {

    this.setState({
      temChar: true
    });
}

  combateHandler = () => (
    this.setState(
      {
        mostrarCombate: !(this.state.mostrarCombate)
      }
    )
  )




  render() {
    return (
      <div className="App">
        <>{this.state.mostrarLogin ? <LoginCadastro loginModalHandler={this.loginModalHandler} /> : null}</>
        <>{this.state.temChar ? null : <TelaPersonagemModal personagemModalHandler={this.personagemModalHandler} />}</>
        <>{this.state.mostrarCombate ? <CombateModal combateHandler={this.combateHandler} /> : null}</>
        <TelaJogo combateHandler={this.combateHandler} />
      </div>
    );
  }
}

export default App;
