import React, { Component } from 'react';
import Nav from '../Nav/Nav.jsx';
import * as d3 from "d3";
import Chart from "../../../node_modules/d3act/lib/components/Chart";
import './App.css';
// const d3 = require('d3');




export default class App extends Component {
  constructor() {
    super();

    this.state = {
      neighborhood: 0,
      month: 1,
      room: 1,
      ratings: 50,
      reviews: 10,
    };
  }

  componentWillMount() {
    // get prediction of default state
    // this.getPrediction();
    this.getResult();
  }

  getResult() {
    const payload = JSON.stringify(this.state);
    fetch('/result', {
      headers : { 'Content-Type': 'application/json' },
      method : 'POST',
      body: payload,
    })
    .then(r => r.json())
    .then(data => {
      console.log('successful call', data)
    })
    .catch(err => console.log('error call to server'));
  }

  getPrediction() {
    const payload = JSON.stringify(this.state);
    fetch('/predict', {
      headers : { 'Content-Type': 'application/json' },
      method : 'POST',
      body: payload,
    })
    .then(r => r.json())
    .then(data => {
      console.log('successful call', data)
    })
    .catch(err => console.log('error call to server'));
  }

  handleSubmit(e) {
    // console.log('handleSubmit', e.target)
    e.preventDefault();
    console.log('state', this.state)
  }

  onSelectChange(e) {
    e.preventDefault();
    // console.log(e.target.value)
    // console.log(e.currentTarget.id)
    switch(e.currentTarget.id) {
         case 'neighborhood':
           // console.log('hey neighbor')
           this.setState({ neighborhood: parseInt(e.target.value) });
           break;
         case 'month':
           this.setState({ month: parseInt(e.target.value) });
           break;
         case 'room':
           this.setState({ room: parseInt(e.target.value) });
           break;
         case 'rating':
           this.setState({ rating: parseInt(e.target.value) });
           break;
         case 'reviews':
           this.setState({ reviews: parseInt(e.target.value) });
           break;
       }
  }

  render() {
    return(
      <div className="App-container">
        <div className="Header-img">
        </div>
        <div className="App-nav">
          <Nav
            handleSubmit={event => this.handleSubmit(event)}
            onSelectChange={event => this.onSelectChange(event)}
            />
        </div>

        <div className="App-main">
          <Chart
              type={"pie"}
              width={300}
              height={300}
              showTooltips={true}
              data={
                  {
                      "React": 2,
                      "Relay": 12,
                      "GraphQL": 5,
                  }
              }
          />
        </div>
      </div>
    )
  }
}
