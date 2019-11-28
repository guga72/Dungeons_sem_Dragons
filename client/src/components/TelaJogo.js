import React, { Component } from 'react';
import '../App.css'
import cenarios from '../instancias'
import Menu from './TelaJogo_components/Menu';
import Game from './TelaJogo_components/Game';

export default class TelaJogo extends React.Component {
    constructor(props){
        super(props);

        this.state = {
          };
    
    }
  

    render(){
        return(
            <div className="App">
                <Menu />
                <Game />
            </div>
        );
    }
}
