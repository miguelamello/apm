"use strict";

import './server-.css';
import template from './server-.html';

class ServerMonitoring {

  /** Private Properties */
  #template = ``;

  /** Private Methods */

  #setTemplate() {
    this.#template = template;
  }

  /** Public Methods */
  constructor() {
    this.#setTemplate();
  }

  getTemplate() { return this.#template; }

  load(callback = undefined) {
    const container = document.getElementById('app-body'); //gets the container
    container.innerHTML = this.getTemplate(); //applies the template to the container
    if (callback) this[callback]();
    //this.#bondToDom();
  }

}

export default new ServerMonitoring();
