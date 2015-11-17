var array = [1, 2, 3, 4, 5];
var array1 = [1, 2, 3, 4, 5, 6];

function swapElem(idx1, idx2, arr) {
  var temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

function reverseArrayInPlace(array) {
  for (var i = 0; i < Math.floor(array.length / 2); i++) {
    swapElem(i, array.length -1 - i, array);
  }
  return array;
}



console.log(reverseArrayInPlace(array));
console.log(reverseArrayInPlace(array1));

