import React, { Component } from 'react';
import './App.css';
import bomb from './bomb.svg';
import crosshair from './crosshair.svg';
import gun from './gun.svg';
import kirpan from './kirpan.svg';
import shield from './shield.svg';
import bomb2 from './bomb2.svg';
import crosshair2 from './crosshair2.svg';
import gun2 from './gun2.svg';
import kirpan2 from './kirpan2.svg';
import shield2 from './shield2.svg';
import kick from './kick.svg';
import add from './add.svg';
import videoURL from './videoplayback.mp4';

class App extends Component {

  constructor() {
    super();

    let availableTeam = [<img src={bomb} alt="bomb"></img>, <img src={crosshair} alt="crosshair"></img>, <img src={gun} alt="gun"></img>, <img src={kirpan} alt="kirpan"></img>, <img src={shield} alt="shield"></img>, <img src={bomb2} alt="bomb2"></img>, <img src={crosshair2} alt="crosshair2"></img>, <img src={gun2} alt="gun2"></img>, <img src={kirpan2} alt="kirpan2"></img>, <img src={shield2} alt="shield2"></img>];
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

        <video id="background-video" loop autoPlay>
          <source src={videoURL} type="video/mp4" />
          <source src={videoURL} type="video/ogg" />
          Your browser does not support the video tag.
        </video>

        <div className="stayLeft">
          <div className="AvailableTeamDiv">
            <h3>Available Team Members</h3>
            {this.state.availableTeam.map((player, key) => <div key={key}><button onClick={() => this.handleClick(player)}>{player}</button><button className="kickBtn" onClick={() => this.handleClickBench(player)}><img src={kick} alt="kick"></img></button></div>)}
          </div>
        </div>

        <div className="stayMid">
        <h1>Airsoft Championships Selection</h1>
        <div className="AlphaTeamMembers">
          <h3 className="AlphaH3">Alpha Team Members</h3>
          {this.state.alphaTeam.map((player, key) => <div key={key}><button className="AlphaTeamBtn">{player}</button><button className="kickBtn" onClick={() => this.handleClickAvailable(player)}><img src={kick} alt="kick"></img></button></div>)}
        </div>
        <div className="AlphaTeamBench">
          <h3 className="">Alpha Team Bench</h3>
          {this.state.benchTeam.map((player, key) => <div key={key}><button onClick={() => this.handleClickAvailableBench(player)}>{player}</button><button onClick={() => this.handleClickAvailableBench(player)} className="addBtn"><img src={add} alt="addBtn"></img></button></div>)}
        </div>
        </div>

        <div className="stayRight">
          <div className="OmegaTeamMembers">
            <h3 className="OmegaH3">Omega Team Members</h3>
            {this.state.omegaTeam.map((player, key) => <div key={key}><button className="OmegaTeamBtn">{player}</button><button className="kickBtn" onClick={() => this.handleClickOmegaBench(player)}><img src={kick} alt="kick"></img></button></div>)}
          </div>
          <div className="OmegaTeamBench">
            <h3 className="">Omega Team Bench</h3>
            {this.state.omegaBenchTeam.map((player, key) => <div key={key}><button onClick={() => this.handleClickOmega(player)}>{player}</button><button onClick={() => this.handleClickOmega(player)} className="addBtn"><img src={add} alt="addBtn"></img></button></div>)}
          </div>
        </div>

      </div>
    );
  }
}

export default App;
