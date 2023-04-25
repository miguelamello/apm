"use strict";

import React from 'react';
import ReactDOM from 'react-dom';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import Drawer from '@mui/material/Drawer';

class appToolbar extends React.Component {

  #observers = [];
  #menuButton;
  #state = {};

  constructor(props) {
    super(props);
    this.#state = { menu: { visible: false } };
    this.handleMenu = this.handleMenu.bind(this);
  }

  handleMenu() { 
    this.#state.menu.visible = !this.#state.menu.visible;
    this.load();
  }

  getTemplate() {  
    return (
      <>
        <Box sx={{ display: 'flex' }}>
          <Drawer open={this.#state.menu.visible}>
            <Typography>menu</Typography>
          </Drawer>
          <AppBar position="fixed">
            <Toolbar>
              {
                this.#state.menu.visible && (
                  <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }} 
                    onClick={this.handleMenu}
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
      </>
    );
  }

  load() {
    const container = document.getElementById('app-header'); //gets the container
    ReactDOM.render(this.getTemplate(), container); //applies the template to the container
  }

}

// Create an instance of the class.
export default new appToolbar();
