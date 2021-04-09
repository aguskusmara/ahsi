var Service = require('node-windows').Service;
 
// Create a new service object
var svc = new Service({
  name:'Zap DattaSystem',
  description: 'Zap Multi Atendimento DattaSystem Backend',
  script: 'C:\Dattasystem\wanderlei\WhatChat-master\backend\dist\server'
});
 
// Listen for the "install" event, which indicates the
// process is available as a service.
svc.on('install',function(){
  svc.start();
});
 
svc.install();