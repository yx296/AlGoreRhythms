var array = [null, 5, null, 1, null, 5, null, 3, 2];


function swap(items, firstIndex, secondIndex){
  var temp = items[firstIndex];
  items[firstIndex] = items[secondIndex];
  items[secondIndex] = temp;
}

function movingZeros(nums) {  
  for (var i = 0; i < nums.length; i++) {
    if (nums[i]) {
      var indexOfElement = i;
      while (nums[indexOfElement - 1] === 0) { //while element to the left is null
        swap(nums, indexOfElement, indexOfElement-1); //swap element and null
        indexOfElement = indexOfElement-1 // keep track of number going to the left
      }
    } 
  }
  return nums;
};



var test = [0,1,0,3,12];

console.log(movingZeros(test));


