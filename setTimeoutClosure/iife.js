var v = 1;
var getValue = function() { return v; };
v = 2;
 
console.log(getValue());

//when a function accesses a variable outside its scope, it accesses that variable, not a frozen copy;
//so when the value held by the variable changes, the function gets that new value;

// var v = 1; 

// var getValue = (function(x) {
//   return function() { return x; };
// })(v);
// // actually creates a mini-universe scope of its own
// //that looks something like
// //-----------------
// // var x = 1
// // function() {
// //   return x;
// // }



// v = 2;

// console.log(getValue());
