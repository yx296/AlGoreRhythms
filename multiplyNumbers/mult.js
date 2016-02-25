
function multiply(args) {
  var args = Array.prototype.slice.call(arguments);
  args = Array.prototype.concat.apply([], args)
  return args.reduce(function(a, b) {
    return a * b;
  })
}


function flatten(arr) {
  var newArr = [];

  arr.forEach(function(a) {
    if(Array.isArray(a)) {
      newArr = newArr.concat(flatten(a));
    } else {
      newArr = newArr.concat(a);
    }
  });
  return newArr;
}

  
// console.log(multiply(1, 2, 3, 4));
// console.log(multiply([1, 2, 3, 4]));

console.log(flatten([[1, 2], [[3, 4], [5, 6]]]));