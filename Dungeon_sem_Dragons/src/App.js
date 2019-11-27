import React from 'react';
import './App.css';
import LoginCadastro from './components/LoginModal';
import TelaJogo from './components/TelaJogo';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      mostrarLogin: true
    }
  }

  render(){
    return (
      <div className="App">
        <>{this.state.mostrarLogin ? <LoginCadastro /> : null}</>
        <TelaJogo />
      </div>
    );
  }
}

export default App;
