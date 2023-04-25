"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

class Login extends React.Component {

  #state = {};
  
  constructor(props) {
    super(props);
    this.#state = { menu: { visible: true } };
    this.setMenuVisibility = this.setMenuVisibility.bind(this);
  }

}

export default new Login();
