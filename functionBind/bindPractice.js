var bind = function(func, context) {
  var prev_args = Array.prototype.slice.call(arguments, 2); //start slice at 2 to skip func and context
  return function(){
    var args = Array.prototype.slice.call(arguments);
    args = prev_args.concat(args);
    return func.apply(context, args);
  }
};

var func = function(a, b){ return a + b };

var boundFunc = bind(func, null, 'foo');

/*
boundFunc = 
  var prev_args = ['foo'];
  var func = function(a, b) { return a + b };
  var context = null;
  function() {
    var args = Array.prototype.slice.call(arguments);
    args = prev_args.concat(args);
    return func.apply(context, args);
  }

*/

var result = boundFunc('bar');


console.log(result === 'foobar'); // true



// var alice = {
//   name: 'alice',
//   shout: function(){
//     return this.name;
//   }
// }

// var boundShout = bind(alice.shout, alice);
// console.log(boundShout()); // alerts 'alice'

// boundShout = bind(alice.shout, {name: 'bob'});



// console.log(boundShout()); // alerts 'bob'

