// Write a function that compacts an array, moving all values to the front and all the nulls to the back. 
// The order of the numbers should not be changed. We’d like to do this in-place.
// Example: input: [ 2, 5, 3, null, 1, null, null, 7, 8, null, 1 ] output: [ 2, 5, 3, 1, 7, 8, 1, null, null, null, null ]

var input = [ 2, 5, 3, null, 1, null, null, 7, 8, null, 1 ];
var input1 = [null, null, null, null, 1];


// var input = [ 2, 5, 3, 1, 7, null, null, null, 8, null, 1 ];
// output: [ 2, 5, 3, 1, 7, 8, 1, null, null, null, null ]

function swap(arr, idx1, idx2) {
  var temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

function reorganizeArr(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === null) {
      for (var j = i; j < arr.length; j++) {
        if (typeof arr[j] === 'number') {
          swap(arr, i, j);
          break;
        }
      }
    }
  }
  return arr;
}


console.log(reorganizeArr(input1));



