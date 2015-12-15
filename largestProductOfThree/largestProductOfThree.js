/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 * 
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */


// var largestProductOfThree = function(array) {
//   array.sort(function(a, b) {
//     return a - b;
//   })
//   // return array;

//   var max1 = array.slice(-3);
//   var max2 = array.slice(0, 2).concat(array.slice(-1));

//   return Math.max(multiply3(max1), multiply3(max2)); 
// };


// var multiply3 = function(arr) {
//   return arr.reduce(function(a, b) {
//     return a * b;
//   })
// }

function largestProductOfThree(arr) { debugger
  var highest = Math.max(arr[0], arr[1]);
  var lowest = Math.min(arr[0], arr[1]);
  var highestProductOf2 = arr[0] * arr[1];
  var lowestProductOf2 = arr[0] * arr[1];
  var highestProductOf3 = arr[0] * arr[1] * arr[2];


  for (var i = 2; i < arr.length; i++) {
    var current = arr[i];

    highestProductOf3 = Math.max(Math.max(
        highestProductOf3,
        current * highestProductOf2),
        current * lowestProductOf2);

    // do we have a new highest product of two?
    highestProductOf2 = Math.max(Math.max(
        highestProductOf2,
        current * highest),
        current * lowest);

    // do we have a new lowest product of two?
    lowestProductOf2 = Math.min(Math.min(
        lowestProductOf2,
        current * highest),
        current * lowest);

    // do we have a new highest?
    highest = Math.max(highest, current);

    // do we have a new lowest?
    lowest = Math.min(lowest, current);
  }
  return highestProductOf3;
}


var test1 = [2, 1, 5, 3, 7, 6];
// var test2 = [-5, 2, -7, 10, 9];
// var test3 = [3, 5, -3, 2, 5];
// var test4 = [1, 10, -5, -1, -100];

// console.log(largestProductOfThree(test1));
// console.log(largestProductOfThree(test2));
// console.log(largestProductOfThree(test3));
console.log(largestProductOfThree(test1));

