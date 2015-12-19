// Function.prototype.bind = function( context ) {
//   // TODO: Your code here

//   var prev_args = Array.prototype.slice.call(arguments, 1);
//   var func = this;

//   return function(){
//     var args = Array.prototype.slice.call(arguments);
//     args = prev_args.concat(args);

//     return func.apply(context, args);
//   }
// };


Function.prototype.bind = function () {
  var fn = this;
  var prev_args = Array.prototype.slice.call(arguments);
  var context = prev_args.shift();
  return function () {
    var newArgs = Array.prototype.slice.call(arguments);
    newArgs = prev_args.concat(newArgs)
    return fn.apply(context, newArgs );
  };
};


var alice = {
  name: 'alice',
  shout: function(){
    return this.name;
  }
}

var boundShout = alice.shout.bind(alice);
console.log(boundShout()); // alerts 'alice'
boundShout = alice.shout.bind({name: 'bob'});
console.log(boundShout()); // alerts 'bob'


// example 2:
// var func = function(a, b){ return a + b };
// var boundFunc = func.bind(null, 'foo');
// var result = boundFunc('bar');
// result === 'foobar'; // true
