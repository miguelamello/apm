"use strict";

import * as React from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import ReactDOM from 'react-dom';
import Box from '@mui/material/Box';

class Login extends React.Component {

  #state = {};

  constructor(props) {
    super(props);
  }

  getTemplate() {  
    return (
      <Box sx={{ display: 'flex', bgcolor: 'primary.main' }}>
        teste  
      </Box>
    );
  }

  load() {
    const container = document.getElementById('app-body'); //gets the container
    ReactDOM.render(this.getTemplate(), container); //applies the template to the container
  }

}

export default new Login();
