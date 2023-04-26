"use strict";

import loadAverage from './load-average';
import cpusAverage from './cpus-average';
import memoryAverage from './memory-average';
import storageAverage from './storage-average';
import storageSpace from './storage-space';
import networkAverage from './network-average';
import './server-monitoring.css';
import template from './server-monitoring.html';

class ServerMonitoring {

  /** Private Properties */
  #observers = []; // holds the observers
  #template = ``; // holds the template

  /** Private Methods */

  #setTemplate() {
    this.#template = template;
  }

  // binds the dom nodes to the class
  #bondToDom() {
    setTimeout(() => {
      //this.#submitButton = document.getElementById('nw5voqqr71');
      //this.setListeners();
    });
  }

  #renderCharts() {
    setTimeout(() => {
      loadAverage.render('mvlnv7eimf');
      cpusAverage.render('ghv5tux3ol');
      memoryAverage.render('xav5q13tww');
      storageAverage.render('caurap3x35');
      storageSpace.render('ireaz9sa6s');
    });
  }

  /** Public Methods */
  constructor() {
    this.#setTemplate();
    this.#bondToDom();
    this.#renderCharts();
  }

  // gets an observer previously set
  getObserver(index) {
    return this.#observers[index];
  }

  // sets an observer
  setObserver(index, module) {
    this.#observers[index] = module;
  }

  // sets the listeners for this module
  setListeners() {
    setTimeout(() => { //wait for dom nodes creation
      /*if (this.#submitButton) {
        this.#submitButton.addEventListener('click', () => {
          this.handleSubmit();
        });
      }*/
    });
  }

  // returns the template for this module
  getTemplate() { return this.#template; }

  // loads the template into the container
  load(callback = undefined) {
    const container = document.getElementById('app-body'); //gets the container
    container.innerHTML = this.getTemplate(); //applies the template to the container
    if (callback) this[callback]();
    this.#setTemplate();
    this.#bondToDom();
    this.#renderCharts()
  }

}

export default new ServerMonitoring();
