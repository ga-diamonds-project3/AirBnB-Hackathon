import React, { Component } from 'react';
import Nav from '../Nav/Nav.jsx';
import * as d3 from "d3";
import Chart from "../../../node_modules/d3act/lib/components/Chart";
import './App.css';
// const d3 = require('d3');




export default class App extends Component {
  render() {
    return(
      <div className="App-container">
        <div className="Header-img">
        </div>
        <div className="App-nav">
          <Nav />
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

//  constructor(props) {
//         super(props);

//         this.state = {
//             data: [
//                 { xValue: "React", yValue: 2 },
//                 { xValue: "Relay", yValue: 12 },
//                 { xValue: "GraphQL", yValue: 5 },
//                 { xValue: "Radium", yValue: 7 },
//                 { xValue: "Babel", yValue: 5 },
//             ]
//         };
//     }

//     componentDidMount() {
//         setTimeout(() => {
//             this.setState({
//                 data: [
//                     { xValue: "React", yValue: 2 },
//                     { xValue: "Relay", yValue: 8 },
//                     { xValue: "GraphQL", yValue: 15 },
//                     { xValue: "Radium", yValue: 27 },
//                     { xValue: "Babel", yValue: 5 },
//                 ]
//             })
//         }, 3000);
//     }

//     render() {
//         return (
//             <div>
//                 <h2>Bar Chart</h2>
//                 <Chart
//                     type={"bar"}
//                     width={500}
//                     height={500}
//                     margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
//                     showTooltips={true}
//                     data={this.state.data}
//                 />
//             </div>
//         );
//     }
// }
