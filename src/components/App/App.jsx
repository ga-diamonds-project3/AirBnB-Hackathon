import React, { Component } from 'react';
import Nav from '../Nav/Nav.jsx';
import './App.css';
import Nav from '../Nav/Nav.jsx';
const d3 = require('d3');

export default class App extends Component {
  render() {
    return(
      <div>
        <div>
          <h1>Heyyy we're alive!!</h1>
        </div>
      <div className="App-container">
        <div className="App-nav">
          <Nav />
        </div>

        <div className="App-main">

        </div>
      </div>
    )
  }
}
