"use strict";

import './toolbar.css';
import template from './toolbar.html';

class Toolbar {

  /** Private Properties */
  #template = ``; // holds the template for this module
  #observers = []; // holds the observers previously set
  #menuButton; // holds the menu button

  /** Private Methods */
  // sets the template
  #setTemplate() { 
    this.#template = template; 
  }

  // binds the dom nodes to the class
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

  // gets an observer previously set
  getObserver(index) {
    return this.#observers[index];
  }

  // sets an observer
  setObserver(index, module) {
    this.#observers[index] = module;
  }

  // handles the menu button click
  handleMenu() {
    const menu = document.getElementById('4t9hltwq4x');
    menu.classList.toggle('u-none');
  }

  //  
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

