import React, { Component } from 'react';
import './App.css';
import Nav from '../Nav/Nav.jsx';
const d3 = require('d3');

export default class App extends Component {
  render() {
    return(
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