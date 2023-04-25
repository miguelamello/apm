"use strict";

import ''
import template from './toolbar.html';

class Toolbar {

  /** Private Properties */
  #template = ``;
  #observers = [];
  #menuButton;

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

  handleMenu() {
    const menu = document.getElementById('4t9hltwq4x');
    menu.classList.toggle('u-none');
  }

  setListeners() {
    setTimeout(() => { //wait for dom nodes creation
      if (this.#menuButton) {
        this.#menuButton.addEventListener('click', () => {
          this.handleMenu();
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

