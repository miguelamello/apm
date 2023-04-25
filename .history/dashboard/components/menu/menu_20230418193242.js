"use strict";

import * as React from 'react';
import ReactDOM from 'react-dom';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

class Login extends React.Component {

  #state = {};

  constructor(props) {
    super(props);
  }

  getTemplate() {  
    return (
      <>
        <Container sx={{ display: 'flex' }}>
          <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} />
        </Container>
      </>
    );
  }

  load() {
    const container = document.getElementById('app-body'); //gets the container
    ReactDOM.render(this.getTemplate(), container); //applies the template to the container
  }

}

export default new Login();
