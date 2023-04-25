"use strict";

import React from 'react';
import ReactDOM from 'react-dom';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';

class appToolbar extends React.Component {

  #observers = [];
  #menuButton;
  #state = {};

  constructor(props) {
    super(props);
    this.#state = { menu: { visible: true } };
    this.setMenuVisibility = this.setMenuVisibility.bind(this);
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

  setMenuVisibility( state ) { 
    console.log(state);
    console.log(this.#state);
    //this.#state.menu.visible = !this.#state.menu.visible;
    this.#state = { ...this.#state, ...state }; 
    console.log(this.#state);
    this.load();
  }

  getTemplate() {  
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            {
              this.#state.menu.visible && (
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 2 }} 
                  onClick={this.setMenuVisibility()}
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
  }

}

// Create an instance of the class.
export default new appToolbar();
