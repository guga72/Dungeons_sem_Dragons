'use strict'

const domContainer = document.querySelector('#main');
const cenarios = require('../../js/mapa')

class menuCenario extends React.Component {
    constructor(props) {
      super(props);
      this.state = {tela: cenarioInicial};
    }

    apresentarPassagens(){
      let ligs = []
      for(i = 0; i < this.state.tela.ligacoes.length; i++){
        ligs.push(<li><a>Dashboard</a></li>)
      }
    }
  
    render() {
        return (
          <aside class="menu">
            <p class="menu-label">
                {this.state.tela.nome}
            </p>
            <ul class="menu-list">
                {
                this.apresentarPassagens();
                /*
                <li><a>Dashboard</a></li>
                <li><a>Customers</a></li>
                */
                }
            </ul>
            <p class="menu-label">
                NPC
            </p>
            <ul class="menu-list">
                <li><a>Team Settings</a></li>
                <li>
                <a class="is-active">Manage Your Team</a>
                <ul>
                    <li><a>Members</a></li>
                    <li><a>Plugins</a></li>
                    <li><a>Add a member</a></li>
                </ul>
                </li>
                <li><a>Invitations</a></li>
                <li><a>Cloud Storage Environment Settings</a></li>
                <li><a>Authentication</a></li>
            </ul>
            <p class="menu-label">
                Passagens
            </p>
            <ul class="menu-list">
                <li><a>Payments</a></li>
                <li><a>Transfers</a></li>
                <li><a>Balance</a></li>
            </ul>
        </aside>
        );
    }
  }

  ReactDOM.render(<MenuCenario />, domContainer);