"use strict";

import Chart from 'chart.js/auto';
import network_data from './network-average-data';

class NetworkAverage {

  #rendered;

  #options() {
    return {
      maintainAspectRatio: false,
    }
  }

  #config() {
    return {
      type: 'line',
      options: this.#options(),
      data: network_data,
    };
  }

  constructor() {}

  render( container ) {
    if ( this.#rendered) {
      this.#rendered.destroy();
      this.#rendered = new Chart(
        document.getElementById( container ),
        this.#config(), 
      );
    } else {
      this.#rendered = new Chart(
        document.getElementById( container ),
        this.#config(), 
      );
    }
  }

}

export default new NetworkAverage();
