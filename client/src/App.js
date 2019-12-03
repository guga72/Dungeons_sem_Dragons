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
    this.criacaoCharHandler = this.criacaoCharHandler.bind(this);
    this.combateHandler = this.combateHandler.bind(this);
  }

  loginModalHandler = () => {

        this.setState({
          mostrarLogin: false
        });
  }

  // } (

  //   this.setState({
  //     mostrarLogin :
  //     axios.post('http://localhost:8080/api/login', {
  //    data : { email : this.props.email,
  //     senha : this.props.senha
  //    },
  //   })
  // })
  //   /*this.setState(
  //     {
  //       mostrarLogin: false
  //     }
  //   )*/
  // );

  combateHandler = () => (
    this.setState(
      {
        mostrarCombate: !(this.state.mostrarCombate)
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



  render() {
    return (
      <div className="App">
        <>{this.state.mostrarLogin ? <LoginCadastro loginModalHandler={this.loginModalHandler} /> : null}</>
        <>{this.state.temChar ? null : <TelaPersonagemModal criacaoCharHandler={this.criacaoCharHandler} />}</>
        <>{this.state.mostrarCombate ? <CombateModal combateHandler={this.combateHandler} /> : null}</>
        <TelaJogo combateHandler={this.combateHandler} />
      </div>
    );
  }
}

export default App;
