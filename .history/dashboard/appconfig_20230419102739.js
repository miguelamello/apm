"use strict";

const hosts = ['orio'];
let configObj = {};

if (hosts.includes(window.location.hostname)) {
  configObj = {
    apiurl: 'http://api.advosys.com.br:9000/'
  };
} else {
  configObj = {
    apiurl: 'http://127.0.0.1:9000/'
  };
}

export default configObj;
