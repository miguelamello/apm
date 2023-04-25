"use strict";



class Login {

  #state = {};

  constructor(props) {
    super(props);
  }

  getTemplate() {  
    
  }

  load() {
    const container = document.getElementById('app-body'); //gets the container
    ReactDOM.render(this.getTemplate(), container); //applies the template to the container
  }

}

export default new Login();
