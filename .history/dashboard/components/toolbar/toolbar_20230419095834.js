"use strict";

import template from './toolbar.html';

class Toolbar {

  /** Private Properties */
  #template = ``;
  #observers = [];

  /** Private Methods */
  #setTemplate() { 
    this.#template = template; 
  }

  /** Public Methods */
  constructor() {
    this.#setTemplate();
  }

  getTemplate() { 
    return this.#template; 
  }

  load() {
    const container = document.getElementById('app-header'); //gets the container
    container.innerHTML = this.getTemplate(); //applies the template to the container
    //this.#bondToDom();
  }

}

// Create an instance of the class.
export default new Toolbar();

