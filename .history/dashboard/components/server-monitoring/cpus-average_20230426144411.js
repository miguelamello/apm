"use strict";

import Chart from 'chart.js/auto';
import cpus from './cpus-average-data.js';

class CpusAverage {

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
      data: data,
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

export default new CpusAverage();
