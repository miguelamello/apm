"use strict";

import './server-monitoring.css';
import template from './server-monitoring.html';

class ServerMonitoring {

  /** Private Properties */
  #observers = []; // holds the observers
  #template = ``; // holds the template

  /** Private Methods */

  #setTemplate() {
    this.#template = template;
  }

  // binds the dom nodes to the class
  #bondToDom() {
    setTimeout(() => {
      //this.#submitButton = document.getElementById('nw5voqqr71');
      //this.setListeners();
    });
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
