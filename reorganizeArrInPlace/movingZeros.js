var array = [0, 5, 0, 1, 0, 5, 0, 3, 2];
var test = [0,1,0,3,12];


// function swap(items, firstIndex, secondIndex){
//   var temp = items[firstIndex];
//   items[firstIndex] = items[secondIndex];
//   items[secondIndex] = temp;
// }

// function movingZeros(nums) {  
//   for (var i = 0; i < nums.length; i++) {
//     if (nums[i]) {
//       var indexOfElement = i;
//       while (nums[indexOfElement - 1] === 0) { //while element to the left is null
//         swap(nums, indexOfElement, indexOfElement-1); //swap element and null
//         indexOfElement = indexOfElement-1 // keep track of number going to the left
//       }
//     } 
//   }
//   return nums;
// };



//O(n) solution

function pushZerosToEnd(nums) { debugger
  var count = 0;
  // Traverse the array. If element encountered is non-
  // zero, then replace the element at index 'count' 
  // with this element

  //first move down non zero numbers to the left
  for (var i = 0; i < nums.length; i++) {
    if (nums[i]) {
      nums[count] = nums[i];
      count++;
      // here count is incremented
    }
  }
  // Now all non-zero elements have been shifted to 
  // front and  'count' is set as index of first 0. 
  // Make all elements 0 from count to end.

  while (count < nums.length) {
    nums[count] = 0;
    count++;
  }
  return nums;
}



// console.log(movingZeros(test));
console.log(pushZerosToEnd(test));


