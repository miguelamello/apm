"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

class Login extends React.Component {

  #state = {};

  constructor(props) {
    super(props);
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
                  onClick={this.setMenuVisibility}
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
    const container = document.getElementById('app-'); //gets the container
    ReactDOM.render(this.getTemplate(), container); //applies the template to the container
  }

}

export default new Login();
