"use strict";

import 'cirrus-ui';
//import './index.css';
import App from './app.js';
//import Session from './controllers/session';

(async () => {
  
  //const user = await Session.getEntry('user');
  const user = false;
  const fragment = `
    <div id="app-root" class="grid grid-cols-1 u-text-center">
      <div id="app-header" class="grid-c-12" style="back"></div>
      <div id="app-body" class="grid-c-12"></div>
    </div>
  `;
  App.appendFragment( fragment );

  if ( user ) {
    /*App.render('app-header','toolbar');
    App.render('app-body','dashboard');
    setTimeout(() => {
      const Toolbar = App.getObserver('toolbar');
      Toolbar.showMenu();
    }, 250);*/
  } else {
    //App.render('app-header','toolbar');
    //App.render('app-body','login'); 
  }

})();

