// Write a function that compacts an array, moving all values to the front and all the nulls to the back. 
// The order of the numbers should not be changed. We’d like to do this in-place.
// Example: input: [ 2, 5, 3, null, 1, null, null, 7, 8, null, 1 ] output: [ 2, 5, 3, 1, 7, 8, 1, null, null, null, null ]

var input = [ 2, 5, 3, null, 1, null, null, 7, 8, null, 1 ];
var input1 = [null, null, null, null, 1];
var array = [null, 5, null, 1, null, 5, null, 3, 2];


var input = [ 2, 5, 3, 1, 7, null, null, null, 8, null, 1 ];
// output: [ 2, 5, 3, 1, 7, 8, 1, null, null, null, null ]

function swap(arr, idx1, idx2) {
  var temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

function reorganizeArr(nums) { 
  for (var i = 0; i < nums.length; i++) {
    if (!nums[i]) {
      for (var j = i + 1; j < nums.length; j++) {
        if (nums[j]) {
          swap(nums, i, j);
          break;
        }
      }
    }
  }
  return nums;
}


console.log(reorganizeArr(array));



