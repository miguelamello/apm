"use strict";

import './toolbar.css'; // import the css for this module
import template from './toolbar.html'; // import the template for this module

class Toolbar {

  /** Private Properties */
  #template = ``; // holds the template for this module
  #observers = []; // holds the observers previously set
  #state = []; // holds the state of this module
  #menuButton; // holds the menu button
  #logoutButton; // holds the logout button
  #modal; // holds the modal
  #modalCancel; // holds the modal close button
  #modalConfirm; // holds the modal confirm button
  #SMPanel; // holds the server monitoring panel
  #SLPanel; // holds the server logging panel
  #SRPanel; // holds the server resource panel
  #APPanel; // holds the application monitoring panel
  #ALPanel; // holds the application logging panel
  #ARPanel; // holds the application resource panel

  /** Private Methods */

  #clearLocation() {
    const url = `${window.location.protocol}//${window.location.host}/`;
    setTimeout(() => {
      window.history.pushState({}, null, url);
    });
  }

  // sets the template
  #setTemplate() { 
    this.#template = template; 
  }

  // binds the dom nodes to the class
  #bondToDom() {
    setTimeout(() => {
      this.#menuButton = document.getElementById('c93jgrmyln');
      this.#logoutButton = document.getElementById('r1t2gs8pu6');
      this.#modal = document.getElementById('0dnsghdw75');
      this.#modalCancel = document.getElementById('d6agnudm2l');
      this.#modalConfirm = document.getElementById('ixgozuw29i');
      this.#SMPanel = document.getElementById('2i8fbszvgb');
      this.#SLPanel = document.getElementById('nmtq008hm1');
      this.#SRPanel = document.getElementById('d6s751f9v9');
      this.#APPanel = document.getElementById('7h0d4tuyhq');
      this.#ALPanel = document.getElementById('7yjb0nochx');
      this.#ARPanel = document.getElementById('7v6midb93w');
      this.setListeners();
    });
  }

  // opens a route
  #openRoute( route ) {
    const App = this.getObserver('app');
    const Route = App.getObserver(route);
    //(Route) ? Route.load() : App.render('app-body', route);
    //this.handleMenu();
    //this.#clearLocation();
    console.log(route);
    console.log()
  }

  // initializes the state
  #initState() { 
    this.#state['menuReadonly'] = true;
  }

  /** Public Methods */
  constructor() {
    this.#setTemplate();
    this.#bondToDom();
    this.#initState();
  }

  // gets an observer previously set
  getObserver(index) {
    return this.#observers[index];
  }

  // sets an observer
  setObserver(index, module) {
    this.#observers[index] = module;
  }

  /** handles the menu button click. 
   * If the menu is readonly, it will not toggle the menu.
   */
  handleMenu() {
    if ( !this.#state.menuReadonly ) {
      const menu = document.getElementById('4t9hltwq4x');
      menu.classList.toggle('u-none');
    }
  }

  // handles the logout button click
  handleLogout() {
    this.toggleModal();
  }

  toggleModal() { 
    const anchor = document.createElement("a");
    anchor.href = "#0dnsghdw75";
    anchor.click();
    this.#clearLocation();
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
      if (this.#modalCancel) {
        this.#modalCancel.addEventListener('click', () => {
          this.#clearLocation();
        });
      }
      if (this.#modalConfirm) {
        this.#modalConfirm.addEventListener('click', () => {
          /** This should effectively logout the user, 
           * but for the sake of this demo, it will just  
           * redirect to the login page.
           */
          const App = this.getObserver('app');
          const Login = App.getObserver('login');
          (Login) ? Login.load() : App.render('app-body','login');
          this.handleMenu();
          this.setState('menuReadonly', true);
          this.#clearLocation();
        });
      }
    });
    if (this.#SMPanel) {
      this.#SMPanel.addEventListener('click', () => {
        this.#openRoute('server-monitoring');
      });
    }
  }

  setState(index, value) {
    try {
      this.#state[index] = value;
    } catch (error) {
      console.error(error);
    }
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

