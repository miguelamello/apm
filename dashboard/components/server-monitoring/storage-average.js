"use strict";

import Chart from 'chart.js/auto';
import storage_data from './storage-average-data.js';

class StorageAverage {

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
      data: storage_data,
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

export default new StorageAverage();
