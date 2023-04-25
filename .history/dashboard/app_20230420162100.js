"use strict";

import './app.css'; // import the main css for the app
import configObj from './appconfig'; // import the app configuration

class App {

  /** Private Properties */
  #routes; // holds the routes
  #observers = []; // holds the observers

  /** Private Methods */
  // sets the routes for the app
  #setRoutes() {
    this.#routes = {
      index: () => { import('/'); }, 
      dashboard: async () => { return await import('./components/dashboard/dashboard.js'); }, 
      toolbar: async () => { return await import('./components/toolbar/toolbar.js'); }, 
      login: async () => { return await import('./components/login/login.js'); }, 
      server_monitoring: async () => { return await import('./components/server-monitoring/server-monitoring.js'); }, 
    };
  }

  // sets the observers for the app
  #setObservers( index, module ) {
    if (!this.#observers[index]) {
      this.#observers[index] = module;
    }
  }

  /** Public Methods */
  constructor() {
    this.#setRoutes(); // sets the routes
  }

  // return a observer
  getObserver(index) {
    return this.#observers[index];
  }

  async render(target, route) {
    try {
      const moduleDefault = await this.#routes[route](); // loads the route
      const module = moduleDefault.default; // gets the module
      const container = document.getElementById(target); // gets the container
      container.innerHTML = module.getTemplate(); // applies the template to the container
      module.setObserver('app', this); // sets a reference to the App object
      this.#setObservers(route, module); // sets obervers on this module
    } catch (error) {
      console.error(error);
    }
  }

  async getInstance(route) {
    try {
      const moduleDefault = await this.#routes[route](); // loads the route
      const module = moduleDefault.default; // gets the module
      module.setObserver('app', this); // sets a reference to the App object
      this.#setObservers(route, module); // sets obervers on this module
    } catch (error) {
      console.error(error);
    }
  }

  appendFragment( html ) {
    const parser = new DOMParser();
    const body = document.body;
    const fragment = parser.parseFromString(html, 'text/html').body;
    body.appendChild(fragment.firstElementChild);
  }

}

export default new App();


