import React, { Component } from 'react';
import './App.css';

const green = '#39D1B4';
const yellow = '#FFD712';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {color: green};
    this.changeColor = this.changeColor.bind(this);
  }
  changeColor(){
    const newColor = this.state.color === green ? yellow : green;
    this.setState({ color: newColor });
  }

  render() {
    const AvailableTeam = ['Benzo Walli', 'Rasha Loa', 'Tayshaun Dasmoto', 'Colmar Cumberbatch', 'Femi Billon', 'Ziya Erika', 'Siyabonga Nesta', 'Sylvain Natalie', 'Dipak Iunia', 'Danel Mio'];
    const AlphaTeam = [];
    const OmegaTeam = [];

    for (let i = 0; i < 3; i++) {
      const playerIndex = Math.floor(Math.random() * AvailableTeam.length);
      AlphaTeam.push(AvailableTeam[playerIndex]);
      AvailableTeam.splice(playerIndex, 1);
    }

    for (let i = 0; i < 3; i++) {
      const playerIndex = Math.floor(Math.random() * AvailableTeam.length);
      OmegaTeam.push(AvailableTeam[playerIndex]);
      AvailableTeam.splice(playerIndex, 1);
    }

    return (
      <div className="App">
        <div>
          <h3>Available Team Members</h3>
          {AvailableTeam.map((player, key) => <div key={key}><button>{player}</button></div>)}
        </div>

        <div>
          <h3>Alpha Team Members</h3>
          {AlphaTeam.map((player, key) => <div key={key}><button>{player}</button></div>)}
        </div>

        <div>
          <h3>Omega Team Members</h3>
          {OmegaTeam.map((player, key) => <div key={key}><button>{player}</button></div>)}
        </div>
      </div>
    );
  }
}

export default App;
