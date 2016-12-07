import React, { Component } from 'react';
import './Nav.css';

export default class Nav extends Component {
  render() {
    return(
      <div>
        <h1>Nav</h1>

        <h2>Month</h2>
          <select>
            <option value="1">January</option>
            <option value="2">Febuary</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">July</option>
            <option value="8">August</option>
            <option value="9">Setpember</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>

          <h2>Bedrooms</h2>
          <select>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>

          <h2>Neighborhoods</h2>
          <select>
            <option value="West Village">West Village</option>
            <option value="Soho">Soho</option>
            <option value="Midtown">Midtown</option>
          </select>

      </div>
    )
  }
}

