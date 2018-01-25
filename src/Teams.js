import React, { Component } from 'react';
import './App.css';
// import ToggleDisplay from 'react-toggle-display';

export class Teams extends React.Component {

  render() {
    const AvailableTeam = ['Benzo Walli', 'Rasha Loa', 'Tayshaun Dasmoto', 'Colmar Cumberbatch', 'Femi Billon', 'Ziya Erika', 'Siyabonga Nesta', 'Sylvain Natalie', 'Dipak Iunia', 'Danel Mio'];
    const AlphaTeam = [];
    const OmegaTeam = [];
    for (let i = 0; i < 3; i++) {
      const playerIndex = Math.floor(Math.random() * AvailableTeam.length);
      OmegaTeam.push(AvailableTeam[playerIndex]);
      AvailableTeam.splice(playerIndex, 1);
    }}
