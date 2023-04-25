"use strict";

import './login.css';
import template from './login.html';

class Login {

  /** Private Properties */
  #template = ``;
  #submitButton;

  /** Private Methods */

  #setTemplate() {
    this.#template = template;
  }

  #bondToDom() {
    setTimeout(() => {
      this.#submitButton = document.getElementById('nw5voqqr71');
      this.setListeners();
    });
  }

  /** Public Methods */
  constructor() {
    this.#setTemplate();
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

  getTemplate() { return this.#template; }

  load(callback = undefined) {
    const container = document.getElementById('app-body'); //gets the container
    container.innerHTML = this.getTemplate(); //applies the template to the container
    if (callback) this[callback]();
    //this.#bondToDom();
  }

}

export default new Login();
