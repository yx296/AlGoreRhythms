var arr1 = [6, 3, 2, 9, 10];
// var arr2 = [2, 6, 3, 9, 10];

function swap(arr, idx1, idx2) {
  var temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

//same partition as quicksort
function partition(arr, left, right) {
  var pivot = arr[left];
  var i = left + 1;
  for (var j = left + 1; j<=right; j++) {
    if (arr[j] < pivot) {
      swap(arr, j, i);
      i++;
    }
  }
  //need to swap pivot with right most element left of the pivit after for loop
  swap(arr, left, i-1);
  // console.log(arr);
  return i-1;
}

// console.log(partition(arr1, 0, arr1.length - 1));
// console.log(partition(arr2, 0, arr2.length - 1));

function kthSmallest(arr, k, left, right) { debugger
  left = typeof left === 'number' ? left : 0
  right = typeof right === 'number' ? right: arr.length - 1

  if (k > 0 && k <= arr.length) {
    var pivotIndex = partition(arr, left, right);
  
    // the 2nd smallest element will have an index of 1, and we know the pivot is sorted for sho
    // the kth smallest element will have an index of k - 1
    if (pivotIndex === k - 1) { 
      return arr[pivotIndex];
    }

    if (pivotIndex > k - 1) {
      return kthSmallest(arr, k, left, pivotIndex -1);
    }

    if (pivotIndex < k - 1) {
      return kthSmallest(arr, k, pivotIndex + 1, right);
    }
  }

  return null;
}


var arr1 = [6, 3, 2, 9, 10];
var arr2 = [201, 5, 2];
console.log(kthSmallest(arr1, 2));
// => 3


