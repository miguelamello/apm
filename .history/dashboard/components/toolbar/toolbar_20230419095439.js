"use strict";

import template from './toolbar-html.js';

class Toolbar {

  #template = ``;
  #observers = [];
  #menuItemWidth = 320;
  #state = {};

  constructor(props) {
    super(props);
    this.#state = { menu: { visible: false } };
    this.handleMenu = this.handleMenu.bind(this);
  }

  #menuItems() {
    return [
      'Response Time', 'Error Rate', 'CPU Usage', 
      'Memory Usage', 'Network Latency', 'Database Performance', 
      'Logging', 'Transaction Volume'
    ];
  }

  handleMenu() { 
    this.#state.menu.visible = !this.#state.menu.visible;
    this.load();
  }

  getTemplate() {  
    
  }

  load() {
    const container = document.getElementById('app-header'); //gets the container
    ReactDOM.render(this.getTemplate(), container); //applies the template to the container
  }

}

// Create an instance of the class.
export default new Toolbar();
