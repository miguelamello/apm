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
    
  }

  load() {
    const container = document.getElementById('app-header'); //gets the container
    ReactDOM.render(this.getTemplate(), container); //applies the template to the container
  }

}

// Create an instance of the class.
export default new appToolbar();
