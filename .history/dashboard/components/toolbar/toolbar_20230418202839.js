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
  #drawerWidth = 240;
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
          <Drawer 
            open={this.#state.menu.visible}
            sx={{
              width: this.#drawerWidth, 
              paddingTop: 64,
              flexShrink: 0,
              [`& .MuiDrawer-paper`]: { width: this.#drawerWidth, boxSizing: 'border-box' },
            }}
          >
            <Box sx={{ display: 'flex' }}>Menu1</Box>
            <Box sx={{ display: 'flex' }}>Menu2</Box>
            <Box sx={{ display: 'flex' }}>Menu3</Box>
            <Box sx={{ display: 'flex' }}>Menu4</Box>
            <Box sx={{ display: 'flex' }}>Menu5</Box>
            <Box sx={{ display: 'flex' }}>Menu6</Box>
            <Box sx={{ display: 'flex' }}>Menu7</Box>
            <Box sx={{ display: 'flex' }}>Menu8</Box>
          </Drawer>
          <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
            <Toolbar>
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
