function swap(items, firstIndex, secondIndex){
  var temp = items[firstIndex];
  items[firstIndex] = items[secondIndex];
  items[secondIndex] = temp;
}

var arr1 = [6, 3, 2, 10, 12, 4];
var arr2 = [5, 3, 2, 1, 4];
var arr3 = [8, 19, 20, 21, 9, 0, 12];

function partition(arr, left, right) {
  var pivotIndex = 0;
  
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] < arr[pivotIndex]) {
      if (arr[i-1] === arr[pivotIndex]) {
        swap(arr, i, pivotIndex)
        pivotIndex = i;
      } else {
        swap(arr, i, pivotIndex + 1)
        swap(arr, pivotIndex + 1, pivotIndex)
        pivotIndex = pivotIndex + 1;
      }
    } 
  }
  return arr;
}

console.log(partition(arr1, 0, arr1.length - 1))
console.log(partition(arr2, 0, arr2.length - 1))
console.log(partition(arr3, 0, arr3.length - 1))


