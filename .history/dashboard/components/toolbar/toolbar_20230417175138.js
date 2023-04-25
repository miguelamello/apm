"use strict";

/*import './toolbar.css';
import template from './toolbar-html.js';
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
import Menu from '../menu/menu';*/

import * as React from 'react';
import ReactDOM from 'react-dom';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';

class appToolbar {

  #observers = [];
  #menuButton;
  #state = { menu: { visible: true } };

  constructor() {
    /*this.#bondToDom();
    this.hideMenu();
    this.#relayObservers(Menu);
    library.add([faBars]);
    dom.watch();*/
  }

  #setState(newState) { console.log(this.#state);
    this.#state = Object.assign({}, this.#state, newState);
    //this.load();
    console.log(this.#state);
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

  setVisiblity() {
    this.#setState({ visible: false });
  }

  getTemplate() {  
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            {
              this.#state.visible && (
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 2 }} 
                  onClick={this.setVisiblity}
                >
                  <MenuIcon />
                </IconButton>
              )
            }
            <Typography variant="h8" component="div" sx={{ flexGrow: 1 }}>
              APM - Application Performance Monitoring
            </Typography>
          </Toolbar>
        </AppBar>   
      </Box>
    );
  }

  load() {
    const container = document.getElementById('app-header'); //gets the container
    ReactDOM.render(this.getTemplate(), container); //applies the template to the container
    //this.#bondToDom();
  }

}

// Create an instance of the class.
export default new appToolbar();
