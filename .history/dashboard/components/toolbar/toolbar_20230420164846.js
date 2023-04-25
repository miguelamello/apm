"use strict";

import './toolbar.css'; // import the css for this module
import template from './toolbar.html'; // import the template for this module

class Toolbar {

  /** Private Properties */
  #template = ``; // holds the template for this module
  #observers = []; // holds the observers previously set
  #menuReadonly = true; // holds the menu readonly state
  #menuButton; // holds the menu button
  #logoutButton; // holds the logout button

  /** Private Methods */
  // sets the template
  #setTemplate() { 
    this.#template = template; 
  }

  // binds the dom nodes to the class
  #bondToDom() {
    setTimeout(() => {
      this.#menuButton = document.getElementById('c93jgrmyln');
      this.#logoutButton = document.getElementById('r1t2gs8pu6');
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
    if ( this.#menuReadonly ) {
      const menu = document.getElementById('4t9hltwq4x');
      menu.classList.toggle('u-none');
    }

  }

  // handles the logout button click
  handleLogout() {
    /** This should effectively logout the user, 
     * but for the sake of this demo, it will just  
     * redirect to the login page.
     */
    const App = this.getObserver('app');
    const Login = App.getObserver('login');
    (Login) ? Login.load() : App.render('app-body','login');
  }

  // sets the listeners for this module
  setListeners() {
    setTimeout(() => { //wait for dom nodes creation
      if (this.#menuButton) {
        this.#menuButton.addEventListener('click', () => {
          this.handleMenu();
        });
      }
      if (this.#logoutButton) {
        this.#logoutButton.addEventListener('click', () => {
          this.handleLogout();
        });
      }
    });
  }

  // gets the template for this module
  getTemplate() { 
    return this.#template; 
  }

  // loads the module
  load() {
    const container = document.getElementById('app-header'); //gets the container
    container.innerHTML = this.getTemplate(); //applies the template to the container
    this.#bondToDom();
  }

}

// Create an instance of the class.
export default new Toolbar();

