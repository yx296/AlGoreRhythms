var array = [2, 7, 4, 1, 5, 3];


function swap(arr, idx1, idx2) {
  var temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}


function selectionSort(arr) { debugger
  for (var i = 0; i < arr.length - 1; i++) {
    var iMin = i;
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[iMin]) { // find smallest element in rest of array
        iMin = j;
      }
    }
    swap (arr, i, iMin)
  }
  return arr;
}



console.log(selectionSort(array));
