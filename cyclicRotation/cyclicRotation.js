function cyclicRotation(arr, k) {
  for (var i = 0; i < k; i++) {
    arr.unshift(arr.pop(arr[i]))
  }
  return arr;
}


function cyclicRotation(arr, k) {
  if (k === 0) {  return arr; }

  if (k > arr.length) {
    k = k % arr.length;
  }


  var splitIndex = arr.length - k;
  var lastElements = arr.slice(-k);
  var firstElements = arr.slice(0, splitIndex);
  return lastElements.concat(firstElements);
}

var arr = [3, 8, 9, 7, 6];


console.log(cyclicRotation(arr, 6));
//should return [9, 7, 6, 3, 8].


