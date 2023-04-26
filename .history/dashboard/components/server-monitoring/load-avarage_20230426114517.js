"use strict";

import Chart from 'chart.js/auto';
import data from './load-avarage-data.js';

class LoadAvarage {

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
      this.#rendered.render();
    } else {
      this.#rendered = new Chart(
        document.getElementById( container ),
        this.#config(), 
      );
    }
  }

}

export default new LoadAvarage();
