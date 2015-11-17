function swap(items, firstIndex, secondIndex){
  var temp = items[firstIndex];
  items[firstIndex] = items[secondIndex];
  items[secondIndex] = temp;
}

function partition(arr, left, right) {

  var pivot   = arr[Math.floor((right + left) / 2)];
  var i = left;
  var j = right;

  while (i <= j) {

    while (arr[i] < pivot) {
      i++;
    }

    while (arr[j] > pivot) {
      j--;
    }

    if (i <= j) {
      swap(arr, i, j);
      i++;
      j--;
    }
  }

  return i;
}

function quickSort(arr, left, right) { debugger

  if (arr.length > 1) {

    left = typeof left != "number" ? 0 : left;
    right = typeof right != "number" ? arr.length - 1 : right;

    var pivotIndex = partition(arr, left, right);

    if (left < pivotIndex - 1) {
      quickSort(arr, left, pivotIndex - 1);
    }

    if (pivotIndex < right) {
      quickSort(arr, pivotIndex, right);
    }
  }
  return arr;
}


console.log(quickSort([2, 1, 4, 5, 3]))
