var MYAPPLICATION = MYAPPLICATION || {};
 
MYAPPLICATION.createNS = function (namespace) { debugger
    var nsparts = namespace.split(".");
    var parent = MYAPPLICATION;
 
    // we want to be able to include or exclude the root namespace so we strip
    // it if it's in the namespace
    if (nsparts[0] === "MYAPPLICATION") {
        nsparts = nsparts.slice(1);
    }
 
    // loop through the parts and create a nested namespace if necessary
    for (var i = 0; i < nsparts.length; i++) {
        var partname = nsparts[i];
        // check if the current parent already has the namespace declared
        // if it isn't, then create it
        if (typeof parent[partname] === "undefined") {
            parent[partname] = {};
        }
        // get a reference to the deepest element in the hierarchy so far
        parent = parent[partname];
    }
    // the parent is now constructed with empty namespaces and can be used.
    // we return the outermost namespace
    return parent;
};




// var MYAPPLICATION = {
//   MODEl: {
//     PRODUCTS: {

//     }
//   }
// }


var ns = MYAPPLICATION.createNS("MODEL.PRODUCTS");

 
ns.product = function(price){
  this.price = price;
  this.getPrice = function(){
    return this.price;
  }
};

// var me = new ns.product(5);
// console.log(me.getPrice());
// console.log(ns);
// console.log(MYAPPLICATION);
console.log(ns);
// console.log(MYAPPLICATION.MODEL.PRODUCTS);
