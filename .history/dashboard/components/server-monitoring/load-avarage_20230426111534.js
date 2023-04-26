"use strict";

import Chart from 'chart.js/auto';
import data from './load-avarage-data.js';

class LoadAvarage {

  #options() {
    return {
      maintainAspectRatio: false,
      scales: {
        y: {
          stacked: true,
          grid: {
            display: true,
            color: "rgba(255,99,132,0.2)"
          }
        },
        x: {
          grid: {
            display: false
          }
        }
      }
    }
  }

  #config() {
    return {
      type: 'line',
      options: this.#options(),
      data: data,
    };
  }

  constructor() {}

  render( container ) {
    const myChart = new Chart(
      document.getElementById( container ),
      this.#config(), 
    );
  }

}

export default new LoadAvarage();
