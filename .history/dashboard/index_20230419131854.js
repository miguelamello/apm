"use strict";

import 'cirrus-ui';
//import './index.css';
import App from './app.js';
//import Session from './controllers/session';

(async () => {
  
  //const user = await Session.getEntry('user');
  const user = false;
  const fragment = `
    <div id="app-root" class="h-screen u-flex u-flex-column u-items-stretch">
      <div id="app-header" class="bg-blue-500 text-white u-flex-grow-0">header</div>
      <div id="app-body" class="bg-gray-500 text-white u-flex-grow-1" style="height:100%;">body</div>
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

