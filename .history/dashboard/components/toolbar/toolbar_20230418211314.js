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
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

class appToolbar extends React.Component {

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
    return (
      <>
        <Box sx={{ display: 'flex' }}>
          <Drawer open={this.#state.menu.visible}>
            <Box sx={{ height: 64 }}></Box>
            <Box sx={{ width: '100%', maxWidth: this.#menuItemWidth, bgcolor: 'background.paper' }}>
              <List>
                {this.#menuItems().map((text, index) => () => {
                  return (
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemText primary= />
                      </ListItemButton>
                    </ListItem>
                  );
                })}
              </List>
              <Divider />
              <List>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary="Settings" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary="Logout" />
                  </ListItemButton>
                </ListItem>
              </List>
            </Box>
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
