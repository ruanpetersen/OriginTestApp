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
import videoURL from './videoplayback.mp4';

class App extends Component {

  constructor(props) {
    super(props);

    let availableTeam = [<img src={bomb} alt="bomb"></img>, <img src={crosshair} alt="crosshair"></img>, <img src={gun} alt="gun"></img>, <img src={kirpan} alt="kirpan"></img>, <img src={shield} alt="shield"></img>, <img src={bomb2} alt="bomb2"></img>, <img src={crosshair2} alt="crosshair2"></img>, <img src={gun2} alt="gun2"></img>, <img src={kirpan2} alt="kirpan2"></img>, <img src={shield2} alt="shield2"></img>];

    this.state = {
     availableTeam : availableTeam,
     alphaTeam : [],
     omegaTeam : [],
     benchTeam : [],
     isLocked : false,
     key : null
    }

    this.handleClickLock = this.handleClickLock.bind(this);
  }

  handleClickLock = (key, player) => {
    let teamToUpdate = this.state.availableTeam;

    this.setState({
      availableTeam: teamToUpdate.map((player, id)=>{
        if(id === key){
          return Object.assign({}, player, {
            isLocked: true
          })
        } else {
          return player;
        }
      })
    })
  }

  handleClickUnlock = (key) => {
    let teamToUpdate = this.state.availableTeam;
    this.setState({
      availableTeam: teamToUpdate.map((player, id)=>{
        if(id === key){
          return Object.assign({}, player, {
            isLocked: false
          })
        } else {
          return player;
        }
      })
    })
  }

  handleBothTeams(handleClickAlphaTeam, handleClickOmegaTeam){
    let availableTeam = this.state.availableTeam;
    if(availableTeam.length >= 10){
      this.handleClickAlphaTeam();
      this.handleClickOmegaTeam();
    }
  }

  handleClickAlphaTeam(key, player){
    let newAlphaTeam = this.state.alphaTeam;
    let availableTeam = this.state.availableTeam;
    let alphaTeam = this.state.alphaTeam;

    if(availableTeam.length >= 5){
      for (let i = 0; i < 5; i++) {
        const playerIndex = Math.floor(Math.random() * availableTeam.length);
        alphaTeam.push(availableTeam[playerIndex]);
        availableTeam.splice(playerIndex, 1);
      }
    }
    this.setState({
      alphaTeam : newAlphaTeam
    });
  };

  handleClickOmegaTeam(){
    let availableTeam = this.state.availableTeam;
    let newOmegaTeam = this.state.omegaTeam;
    let omegaTeam = this.state.omegaTeam;

    if(availableTeam.length >= 5){
      for (let i = 0; i < 5; i++) {
        const playerIndex = Math.floor(Math.random() * availableTeam.length);
        omegaTeam.push(availableTeam[playerIndex]);
        availableTeam.splice(playerIndex, 1);
      }
    }
    this.setState({
      omegaTeam : newOmegaTeam
    });
  };

  handleClickToAlpha(player) {
    let newAlphaTeam = this.state.alphaTeam;
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
      alphaTeam : newAlphaTeam
    });
  }

  handleClickToOmega(player) {
    let newOmegaTeam = this.state.omegaTeam;
    let availableTeam = this.state.availableTeam;
    // if player is not in array , add him
    if(newOmegaTeam.indexOf(player)<0){
        newOmegaTeam.push(player);
        availableTeam.splice(availableTeam.indexOf(player), 1);
    }
    // if player is in the array , remove him
    else{
      newOmegaTeam.splice(newOmegaTeam.indexOf(player), 1);
    }
    //setState to rerender the App component
    this.setState({
      OmegaTeam : newOmegaTeam
    });
  }

  handleClickAvailableAlpha(player) {
    let newAlphaTeam = this.state.alphaTeam;
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
      alphaTeam : newAlphaTeam
    });
  }

  handleClickAvailableOmega(player) {
    let newOmegaTeam = this.state.omegaTeam;
    let newAvailableTeam = this.state.availableTeam;
    // if player is not in array , add him
    if(newAvailableTeam.indexOf(player)<0){
        newAvailableTeam.push(player);
        newOmegaTeam.splice(newOmegaTeam.indexOf(player), 1);
    }
    // if player is in the array , remove him
    else{
      newAvailableTeam.splice(newAvailableTeam.indexOf(player), 1);
    }
    //setState to rerender the App component
    this.setState({
      omegaTeam : newOmegaTeam
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

        <h1>Airsoft Championships Selection</h1>

        <div className="stayLeft">
          <div className="AvailableTeamDiv">
            <h3 className="subH3">Available Team Members</h3>
            <div className="btnGroup">
              <button className="alphaTeamGen" onClick={() => this.handleClickAlphaTeam()}>Generate Alpha Team</button>
              <button className="omegaTeamGen" onClick={() => this.handleClickOmegaTeam()}>Generate Omega Team</button>
              <button className="bothTeamGen" onClick={() => this.handleBothTeams()}>Generate Both Teams</button>
            </div>
            {this.state.availableTeam.map((player, key) => <div key={key}><button>{player}</button><br/>
            <button disabled={player.isLocked} className="goldBtn" onClick={() => this.handleClickToAlpha(player)}>Alpha</button>
            <button disabled={player.isLocked} className="redBtn" onClick={() => this.handleClickToOmega(player)}>Omega</button>
            <button className="lockBtn" onClick={() => this.handleClickLock(key)}>Lock</button>
            <button className="unLockBtn" onClick={() => this.handleClickUnlock(key)}>Unlock</button>
            </div>)}
          </div>
        </div>

        <div className="stayMid">
          <div className="AlphaTeamMembers">
            <h3 className="AlphaH3">Alpha Team Members</h3>
            {this.state.alphaTeam.map((player, key) => <div key={key}><button className="AlphaTeamBtn">{player}</button><button className="kickBtn" onClick={() => this.handleClickAvailableAlpha(player)}><img src={kick} alt="kick"></img></button></div>)}
          </div>
        </div>

        <div className="stayRight">
          <div className="OmegaTeamMembers">
            <h3 className="OmegaH3">Omega Team Members</h3>
            {this.state.omegaTeam.map((player, key) => <div key={key}><button className="OmegaTeamBtn">{player}</button><button className="kickBtn" onClick={() => this.handleClickAvailableOmega(player)}><img src={kick} alt="kick"></img></button></div>)}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
