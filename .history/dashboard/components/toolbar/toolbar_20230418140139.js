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
    this.setState = this.setState.bind(this);
  }

  setState() {
    this.#state.menu.visible = !this.#state.menu.visible;
    this.load();
  }

  /*setMenuVisibility() {
    this.#state.menu.visible = !this.#state.menu.visible;
    this.load();
  }*/

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
                  onClick={this.#setState({ menu: { visible: false }})}
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
