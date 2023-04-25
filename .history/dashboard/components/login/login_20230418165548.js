"use strict";

import React from 'react';
import ReactDOM from 'react-dom';
import Grid from '@mui/material/Grid';

class Login extends React.Component {

  #state = {};

  constructor(props) {
    super(props);
  }

  getTemplate() {  
    return (
      <Grid container spacing={3}>
        <Grid xs>
          <Item>xs</Item>
        </Grid>
        <Grid xs={6}>
          <Item>xs=6</Item>
        </Grid>
        <Grid xs>
          <Item>xs</Item>
        </Grid>
      </Grid>
    );
  }

  load() {
    const container = document.getElementById('app-body'); //gets the container
    ReactDOM.render(this.getTemplate(), container); //applies the template to the container
  }

}

export default new Login();
