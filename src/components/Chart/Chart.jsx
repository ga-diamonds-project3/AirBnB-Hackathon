import React, { Component } from 'react';
import './Chart.css';
const LineChart = require('react-d3-basic').LineChart;

const width = 700;
const height = 300;
const margins = {left: 100, right: 100, top: 50, bottom: 50};
const title = 'Line chart example'
const chartSeries = [{
  field: 'field',
  name: 'name',
  color: '#ff7f0e',
}];
const x = d => d.index;

export default class Chart extends Component {
  getChartData() {
    // an array of data
    // const chartData = [];
  }

  render() {
    return(
      <div className="chart-graph">
        <LineChart 
          margins={margins}
          title={title}
          data={chartData}
          width={width}
          height={height}
          chartSeries={chartSeries}
          x={x} />
      </div>
    )
  }
}