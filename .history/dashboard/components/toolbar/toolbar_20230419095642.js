"use strict";

import template from './toolbar-html.js';

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
    
  }

  load() {
    const container = document.getElementById('app-header'); //gets the container
    ReactDOM.render(this.getTemplate(), container); //applies the template to the container
  }

}

// Create an instance of the class.
export default new Toolbar();
