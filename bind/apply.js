function sumArguments () {
  var value = this instanceof Number ? this : 0;
  for (var i = 0; i < arguments.length; i++) {
    value += arguments[i];
  }
  return value;
}

Function.prototype.apply1 = function() {
  var fn = this;
  var args = Array.prototype.slice.call(arguments);
  var context = args.shift();
  var newArgs = args[0];

  newArgs.forEach(function(arg) {
    fn = fn.bind(context, arg);
    console.log(fn);
  })
  return fn();
}

console.log(sumArguments.apply1(4, [1, 2, 3]));


// var apply = function(fn, args) {
//   var _fn = fn;
//   args.forEach(function(arg) {
//     _fn = _fn.bind(null, arg);
//   });
//   return _fn();
// };

// var students = ["Peter Alexander", "Michael Woodruff", "Judy Archer", "Malcolm Khan"];


// // No specific parameters defined, because ANY number of parameters are accepted​
// function welcomeStudents () {
//   var args = Array.prototype.slice.call(arguments);
//   var lastItem = args.pop();
//   return "Welcome " + args.join (", ") + ", and " + lastItem + ".";
// }

// console.log(welcomeStudents.apply(null, students));
