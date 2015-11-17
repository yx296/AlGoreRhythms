function swap(items, firstIndex, secondIndex){
  var temp = items[firstIndex];
  items[firstIndex] = items[secondIndex];
  items[secondIndex] = temp;
}

// two boundaries 
// index j what we've looked at so far versus what we haven't looked at
// index i amongst stuff we've seen, where is split between those less and bigger than the pivot 


//key idea partition array around a pivot element
//rearrange array so that any elements left of the pivot are less than the pivot
//any elements right of the pivot are more than the pivot

function partition(arr, left, right) {

  var pivot = arr[left];
  var i = left + 1;
  for (var j = left + 1; j <= right; j++) {
    if (arr[j] < pivot) { 
      swap(arr, j, i);  //need to swap with left most array entry which is currently bigger than pivot
      i++;
    }
  }
  //swap pivot with right most element smaller than the pivot (i-1)
  swap(arr, left, i-1)
  return i - 1;  //return index of pivot
}

function quickSort(arr, start, end) { debugger

  var start = typeof start === 'number' ? start : 0
  var end = typeof end === 'number' ? end : arr.length - 1
  
  if (start < end) {
    var pivotNewIndex = partition(arr, start, end);
    quickSort(arr, start, pivotNewIndex - 1);
    quickSort(arr, pivotNewIndex + 1, end);
  }
  
  // return arr;
}
// var arr1 = [2, 1, 5, 7, 4]
// var arr2 = [4, 3, 2, 1];
// var arr3 = [1, 2, 3, 4];
var arr4 = [3, 2, 1, 4];
// console.log(partition(arr1));
// console.log(partition(arr4));
quickSort(arr4);
// console.log(quickSort(arr4));
console.log(arr4);
// [3, 2, 8, 5, 1]


