import React from 'react';
import './App.css';
import LoginCadastro from './components/LoginModal';
import TelaJogo from './components/TelaJogo';
import TelaPersonagemModal from './components/TelaPersonagemModal';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      mostrarLogin: true,
      temChar: false
    }

    this.loginModalHandler = this.loginModalHandler.bind(this);
    this.criacaoCharHandler = this.criacaoCharHandler.bind(this);
  }

  loginModalHandler = () => (
    this.setState(
      {
        mostrarLogin: false
      }
    )
  )

  criacaoCharHandler = () => (
    this.setState(
      {
        temChar: true
      }
    )
  )



  render(){
    return (
      <div className="App">
        <>{this.state.mostrarLogin ? <LoginCadastro loginModalHandler= {this.loginModalHandler}/> : null}</>
        <>{this.state.temChar ? null : <TelaPersonagemModal criacaoCharHandler= {this.criacaoCharHandler} />}</>
        <TelaJogo />
      </div>
    );
  }
}

export default App;
