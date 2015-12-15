//just for positive numbers

function largestProductOfThree(arr) { debugger
  var highest = Math.max(arr[0], arr[1]);
  var highestProductOf2 = arr[0] * arr[1];
  var highestProductOf3 = arr[0] * arr[1] * arr[2];

  for (var i = 2; i < arr.length; i++) {
    var current = arr[i];
    highestProductOf3 = Math.max(highestProductOf3, current * highestProductOf2);

    // do we have a new highest product of two?
    highestProductOf2 = Math.max(highestProductOf2, current * highest)
    // do we have a new highest?
    highest = Math.max(highest, current);
  }
  return highestProductOf3;
}


// var test1 = [2, 1, 5, 3, 7, 6];
var test5 = [5, 2, 6, 3, 7, 9]
// var test2 = [-5, 2, -7, 10, 9];
// var test3 = [3, 5, -3, 2, 5];
// var test4 = [1, 10, -5, -1, -100];
// console.log(largestProductOfThree(test1));
// console.log(largestProductOfThree(test2));
// console.log(largestProductOfThree(test3));
// console.log(largestProductOfThree(test1));
console.log(largestProductOfThree(test5));
