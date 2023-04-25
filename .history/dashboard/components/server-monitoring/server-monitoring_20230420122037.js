"use strict";

import './login.css';
import template from './login.html';

class Login {

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

export default new Login();
