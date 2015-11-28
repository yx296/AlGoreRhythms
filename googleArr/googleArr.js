// Given an array of ints, return the length of the longest subsequence that strictly increases by 1.
// example: [0, 1, 2, 5, 4, 6, 7] --> 3
// example: [0, 2, 4, 6] --> 1
// The same question as above, but now the ints are represented as a tree.
// example: 2 - 4 - 7
//              - 11

//          - 3 - 4

//              - 6
// In this odd looking tree, 2 is the root node, 3 and 4 are 2's left and right child, 
// while 6, 4, 11, and 7 are the next level of the tree.



function arrIncreaseBy1(array) {
  var count = 1;
  var max = 1;

  for (var i = 0; i < array.length; i++) {
    if (array[i+1] === array[i] + 1) {
      count++;
    } else {
      if (count > max) {
        max = count;
      }
      count = 1;
    }
  }

  return max;
}


console.log(arrIncreaseBy1([0, 1, 2, 5, 4, 6, 7]));
console.log(arrIncreaseBy1([0, 2, 4, 6]));
