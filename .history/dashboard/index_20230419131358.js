"use strict";

import 'cirrus-ui';
//import './index.css';
import App from './app.js';
//import Session from './controllers/session';

(async () => {
  
  //const user = await Session.getEntry('user');
  const user = false;
  const fragment = `
    <div id="app-root" class="h-screen u-flex u-flex-column">
      <div id="app-header" class="bg-green-500 text-white">header</div>
      <div id="app-body" class="bg-gray-500 text-white">body</div>
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

