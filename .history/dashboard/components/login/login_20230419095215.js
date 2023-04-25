"use strict";

import template from './login.html';

class Login {

  /** Private Properties */
  #template = ``;

  /** Private Methods */

  #setTemplate() {
    this.#template = template;
  }

  constructor() {
    this.#setTemplate();
  }

  getTemplate() {  
    
  }

  load() {
    const container = document.getElementById('app-body'); //gets the container
    ReactDOM.render(this.getTemplate(), container); //applies the template to the container
  }

}

export default new Login();
