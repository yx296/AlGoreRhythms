// Write a function which takes an array of arrays (each of which contains numbers sorted from largest to smallest), 

// and a number (n). Return the n largest numbers.

// For example:

// Do this without copying or modifying the arrays (just read from them).
// Optimize for time complexity.

function findLargest(numberArrays, n ) {
  var results = [];
  var pointers = [];

  for (var x = 0; x < numberArrays.length; x++) {
    pointers.push(0);
  }
  
  while (results.length < n) {
    var subMaxes = [];
    for (var i = 0; i < pointers.length; i++) {
      var point = pointers[i];
      subMaxes.push(numberArrays[i][point]);
    }
    var max = Math.max.apply(null, subMaxes);
    var indexOfMax = subMaxes.indexOf(max);
    pointers[indexOfMax]++;
    results.push(max);  
  }
  return results;
}



// console.log(findLargest([ [10, 5, 3, 1], [9, 8, 7, 6], [11, 2, 1, 0] ], 5));
console.log(findLargest([ [15, 5, 3, 1], [10, 8, 7, 6]], 3));


// should return [11, 10, 9, 8, 7]

