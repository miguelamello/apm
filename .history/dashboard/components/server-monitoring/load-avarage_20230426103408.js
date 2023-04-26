"use strict";

import Chart from 'chart.js/auto';

class LoadAvarage {

  constructor() {
    this.chart = undefined;
    this.chartData = {
      labels: [],
      datasets: [{
        label: 'Load Avarage',
        data: [],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }]
    };
  }

}

export default new LoadAvarage();
