function diff(arr1, arr2) {
  var results = [];
  results.push(findDiff(arr1, arr2));
  results.push(findDiff(arr2, arr1));

  return results;
}

function findDiff(array1, array2) {
  var i = 0;
  var j = 0;

  var res = [];
  while (i < array1.length && j < array2.length) {
    if (array1[i] === array2[j]) {
      i++;
      j++;
    }

    if (array1[i] < array2[j]) {
      res.push(array1[i]);
      i++;
    }

    if (array1[i] > array2[j]) {
      j++;
    }
  }

  while (i < array1.length) {
    res.push(array1[i])
    i++;
  }
  return res;
}
//[[2,3,5],[4,6,6]]

// console.log(findDiff([1, 4, 5, 6, 6], [1, 2, 3, 5, 5]));
console.log(diff([1,2,3,5,5],[1,4,5,6,6]))//=>
