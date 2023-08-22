"use strict";

const hosts = ['apm.orionsoft.site'];
let configObj = {};

if (hosts.includes(window.location.hostname)) {
  configObj = {
    apiurl: 'http://apm.orionsoft.site/'
  };
} else {
  configObj = {
    apiurl: 'http://127.0.0.1:9000/'
  };
}

export default configObj;
