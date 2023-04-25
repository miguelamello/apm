"use strict";

/*import './toolbar.css';
import template from './toolbar-html.js';
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
import Menu from '../menu/menu';*/

import * as React from 'react';
import ReactDOM from 'react-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

class Toolbar {

  #observers = [];
  #menuButton;

  constructor() {
    /*this.#bondToDom();
    this.hideMenu();
    this.#relayObservers(Menu);
    library.add([faBars]);
    dom.watch();*/
  }

  #bondToDom() {
    setTimeout(() => {
      this.#menuButton = document.getElementById('2xxxhxkd70');
      this.setListeners();
    });
  }

  #relayObservers(Menu) {
    Menu.setObservers(this.#observers);
    Menu.setObserver('toolbar', this);
  }

  getObserver(index) {
    return this.#observers[index];
  }

  setListeners() {
    setTimeout(() => { //wait for dom nodes creation
      if (this.#menuButton) {
        this.#menuButton.addEventListener('click', () => {
          Menu.show();
        });
      }
      /*if (this.#homeButton) {
        this.#homeButton.addEventListener('click', () => {
          const App = this.getObserver('App');
          App.render('app-body','dashboard');
        });
      }
      if (this.#logoutButton) {
        this.#logoutButton.addEventListener('click', () => { 
          this.#logout(); 
        });
      }*/
    });
  }

  setObserver( index, module ) {
    this.#observers[index] = module;
  }

  showMenu() {
    setTimeout(() => {
      this.#menuButton.style.visibility = 'visible';
    });
  }

  hideMenu() {
    setTimeout(() => {
      this.#menuButton.style.visibility = 'hidden';      
    });
  }

  showUserInfo() {
    Menu.showUserInfo();
  }

  getTemplate() {  
    return 
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>;
  }

  load() {
    const container = document.getElementById('app-header'); //gets the container
    ReactDOM.render(this.getTemplate(), container); //applies the template to the container
    //this.#bondToDom();
  }

}

// Create an instance of the class.
export default new Toolbar();
