"use strict";

import './login.css'; // loads the css for this module
import template from './login.html'; // loads the template for this module

class Login {

  /** Private Properties */
  #observers = []; // holds the observers
  #template = ``; // holds the template
  #submitButton; // holds the submit button

  /** Private Methods */

  // sets the template
  #setTemplate() {
    this.#template = template;
  }

  // binds the dom nodes to the class
  #bondToDom() {
    setTimeout(() => {
      this.#submitButton = document.getElementById('nw5voqqr71');
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

  // handles the submit button click
  handleSubmit() {
    /** This should process the actual user login, 
     * but for the sake of this demo, it will just 
     * redirect to the dashboard. 
     * This function should sanitize the input before 
     * sending it to the server.
     */
    const App = this.getObserver('app');
    const ServerMonitoring = App.getObserver('server_monitoring');
    (ServerMonitoring) ? ServerMonitoring.load() : App.render('app-body','server_monitoring');
    const Toolbar = App.getObserver('toolbar');
    //Toolbar.setState('menuReadonly', false);
    console.log(Toolbar);
  }

  // sets the listeners for this module
  setListeners() {
    setTimeout(() => { //wait for dom nodes creation
      if (this.#submitButton) {
        this.#submitButton.addEventListener('click', () => {
          this.handleSubmit();
        });
      }
    });
  }

  // returns the template for this module
  getTemplate() { return this.#template; }

  // loads the template into the container
  load(callback = undefined) {
    const container = document.getElementById('app-body'); //gets the container
    container.innerHTML = this.getTemplate(); //applies the template to the container
    if (callback) this[callback]();
    this.#bondToDom();
  }

}

export default new Login();
