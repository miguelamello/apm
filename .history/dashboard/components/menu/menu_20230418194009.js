"use strict";

import * as React from 'react';
import ReactDOM from 'react-dom';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

class Menu extends React.Component {

  #state = {};

  constructor(props) {
    super(props);
  }

  getTemplate() {  
    return (
      <>
        <Drawer 
          open={state[anchor]}
        >
          <Box>menu</Box>
        </Drawer>
      </>
    );
  }

  load() {
    const container = document.getElementById('app-body'); //gets the container
    ReactDOM.render(this.getTemplate(), container); //applies the template to the container
  }

}

export default new Menu();
