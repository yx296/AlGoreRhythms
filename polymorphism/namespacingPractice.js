var MYAPP = MYAPP || {};

MYAPP.createNS = function(namespace) {
  var nsParts = namespace.split(".");
  var parent = MYAPP;

  nsParts = nsParts.slice(1);

  for (var i = 0; i < nsParts.length; i++) {
    var namespace = nsParts[i];
    
    if (!parent[namespace]) {
      parent[namespace] = {};
    }
    parent = parent[namespace];
  }
  return parent;
 }


var ns = MYAPP.createNS('MYAPP.MODEL.PRODUCTS');


console.log(ns);

console.log(MYAPP);
