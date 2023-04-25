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

  #bondToDom() {
    setTimeout(() => {
      this.#menuButton = document.getElementById('c93jgrmyln');
      this.setListeners();
    });
  }

  /** Public Methods */
  constructor() {
    this.#setTemplate();
    this.#bondToDom();
  }

  setListeners() {
    setTimeout(() => { //wait for dom nodes creation
      if (this.#menuButton) {
        this.#menuButton.addEventListener('click', () => {
          this.handlemenu();
        });
      }
    });
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

