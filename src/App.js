import React, { Component } from 'react';
import './App.css';

const green = '#39D1B4';
const yellow = '#FFD712';

class App extends Component {

  constructor() {
    super();

    let availableTeam = ['Benzo Walli', 'Rasha Loa', 'Tayshaun Dasmoto', 'Colmar Cumberbatch', 'Femi Billon', 'Ziya Erika', 'Siyabonga Nesta', 'Sylvain Natalie', 'Dipak Iunia', 'Danel Mio'];
    let alphaTeam = [];
    let omegaTeam = [];
    let benchTeam = [];
    let omegaBenchTeam = [];
    for (let i = 0; i < 5; i++) {
      const playerIndex = Math.floor(Math.random() * availableTeam.length);
      omegaTeam.push(availableTeam[playerIndex]);
      availableTeam.splice(playerIndex, 1);
    }
    this.state = {
     availableTeam : availableTeam,
     alphaTeam : [],
     omegaTeam : omegaTeam,
     benchTeam : [],
     omegaBenchTeam : []
    };
  }


  handleClick(player) {
    let newAlphaTeam = this.state.alphaTeam;
    let newBenchTeam = this.state.benchTeam;
    let availableTeam = this.state.availableTeam;
    // if player is not in array , add him
    if(newAlphaTeam.indexOf(player)<0){
        newAlphaTeam.push(player);
        availableTeam.splice(availableTeam.indexOf(player), 1);
    }
    // if player is in the array , remove him
    else{
      newAlphaTeam.splice(newAlphaTeam.indexOf(player), 1);
    }
    //setState to rerender the App component
    this.setState({
      alphaTeam : newAlphaTeam,
    });
  }

  handleClickBench(player) {
    let newBenchTeam = this.state.benchTeam;
    let newAlphaTeam = this.state.alphaTeam;
    let newOmegaTeam = this.state.omegaTeam;
    let availableTeam = this.state.availableTeam;
    // if player is not in array , add him
    if(newBenchTeam.indexOf(player)<0){
        newBenchTeam.push(player);
        availableTeam.splice(availableTeam.indexOf(player), 1);
    }
    // if player is in the array , remove him
    else{
      newBenchTeam.splice(newBenchTeam.indexOf(player), 1);
    }
    //setState to rerender the App component
    this.setState({
      benchTeam : newBenchTeam,
    });
  }

  handleClickOmegaBench(player) {
    let newOmegaBenchTeam = this.state.omegaBenchTeam;
    let newOmegaTeam = this.state.omegaTeam;
    // if player is not in array , add him
    if(newOmegaBenchTeam.indexOf(player)<0){
        newOmegaBenchTeam.push(player);
        newOmegaTeam.splice(newOmegaTeam.indexOf(player), 1);
    }
    // if player is in the array , remove him
    else{
      newOmegaBenchTeam.splice(newOmegaBenchTeam.indexOf(player), 1);
    }
    //setState to rerender the App component
    this.setState({
      OmegabenchTeam : newOmegaBenchTeam,
    });
  }

  handleClickOmega(player) {
    let newOmegaBenchTeam = this.state.omegaBenchTeam;
    let newOmegaTeam = this.state.omegaTeam;
    let newAlphaTeam = this.state.alphaTeam;
    // if player is not in array , add him
    if(newOmegaTeam.indexOf(player)<0){
        newOmegaTeam.push(player);
        newOmegaBenchTeam.splice(newOmegaBenchTeam.indexOf(player), 1);
    }
    // if player is in the array , remove him
    else{
      newOmegaTeam.splice(newOmegaTeam.indexOf(player), 1);
    }
    //setState to rerender the App component
    this.setState({
      omegaTeam : newOmegaTeam,
    });
  }

  handleClickAvailable(player) {
    let newAlphaTeam = this.state.alphaTeam;
    let newBenchTeam = this.state.benchTeam;
    let newAvailableTeam = this.state.availableTeam;
    // if player is not in array , add him
    if(newAvailableTeam.indexOf(player)<0){
        newAvailableTeam.push(player);
        newAlphaTeam.splice(newAlphaTeam.indexOf(player), 1);
    }
    // if player is in the array , remove him
    else{
      newAvailableTeam.splice(newAvailableTeam.indexOf(player), 1);
    }
    //setState to rerender the App component
    this.setState({
      alphaTeam : newAlphaTeam,
    });
  }

  handleClickAvailableBench(player) {
    let newAlphaTeam = this.state.alphaTeam;
    let newBenchTeam = this.state.benchTeam;
    let newAvailableTeam = this.state.availableTeam;
    // if player is not in array , add him
    if(newAvailableTeam.indexOf(player)<0){
        newAvailableTeam.push(player);
        newBenchTeam.splice(newBenchTeam.indexOf(player), 1);
    }
    // if player is in the array , remove him
    else{
      newAvailableTeam.splice(newAvailableTeam.indexOf(player), 1);
    }
    //setState to rerender the App component
    this.setState({
      alphaTeam : newAlphaTeam,
    });
  }

  render() {

    return (
      <div className="App">

        <h1>Extreme Paintball Line-up!</h1>

        <div className="top">
          <div className="AvailableTeamDiv">
            <h3>Available Team Members</h3>
            {this.state.availableTeam.map((player, key) => <div key={key}><button onClick={() => this.handleClick(player)}>{player}</button><button className="kickBtn" onClick={() => this.handleClickBench(player)}>Kick</button></div>)}
          </div>
        </div>

        <div className="mid">
          <div className="AlphaTeamMembers">
            <h3 className="AlphaH3">Alpha Team Members</h3>
            {this.state.alphaTeam.map((player, key) => <div key={key}><button>{player}</button><button className="kickBtn" onClick={() => this.handleClickAvailable(player)}>Kick</button></div>)}
          </div>
          <div className="OmegaTeamMembers">
            <h3 className="OmegaH3">Omega Team Members</h3>
            {this.state.omegaTeam.map((player, key) => <div key={key}><button>{player}</button><button className="kickBtn" onClick={() => this.handleClickOmegaBench(player)}>Kick</button></div>)}
          </div>
        </div>

        <div  className="bot">
          <div className="AlphaTeamBench">
            <h3 className="UniH3">Alpha Team Bench</h3>
            {this.state.benchTeam.map((player, key) => <div key={key}><button onClick={() => this.handleClickAvailableBench(player)}>{player}</button></div>)}
          </div>
          <div className="OmegaTeamBench">
            <h3 className="UniH3">Omega Team Bench</h3>
            {this.state.omegaBenchTeam.map((player, key) => <div key={key}><button onClick={() => this.handleClickOmega(player)}>{player}</button></div>)}
          </div>
        </div>

      </div>
    );
  }
}

export default App;
