import React, { Component } from 'react';
import './App.css';
import ToggleDisplay from 'react-toggle-display';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { show: false };
  }

  handleClick() {
    this.setState({
      show: !this.state.show
    });
  }

  render() {
    const AvailableTeam = ['Benzo Walli', 'Rasha Loa', 'Tayshaun Dasmoto', 'Colmar Cumberbatch', 'Femi Billon', 'Ziya Erika', 'Siyabonga Nesta', 'Sylvain Natalie', 'Dipak Iunia', 'Danel Mio'];
    const AlphaTeam = [];
    const OmegaTeam = [];

    for (let i = 0; i < 3; i++) {
      const playerIndex = Math.floor(Math.random() * AvailableTeam.length);
      OmegaTeam.push(AvailableTeam[playerIndex]);
      AvailableTeam.splice(playerIndex, 1);
    }

    return (
      <div className="App">
        <div>
          <h3>Available Team Members</h3>
          <button onClick={ () => this.handleClick() }>Benzo Walli</button>
          <button onClick={ () => this.handleClick() }>Ruan</button>
        </div>

        <div>
          <h3>Alpha Team Members</h3>
          <ToggleDisplay show={this.state.show}>
            <div><button>Benzo Walli</button></div>
          </ToggleDisplay>
          <ToggleDisplay show={this.state.show}>
            <div><button>Ruan</button></div>
          </ToggleDisplay>
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
