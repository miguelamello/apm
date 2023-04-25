"use strict";

import template from './login.html';

class Login {

  #template = ``;

  /** Private Methods */
  

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
