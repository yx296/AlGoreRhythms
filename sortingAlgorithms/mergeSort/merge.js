function merge(left, right) { debugger
  var results = [];
  var resultArrayLength = left.length + right.length;
  var i = 0;
  var j = 0;
  
  for (var k = 0; k < resultArrayLength; k++) {
    if (left[i] < right[j]) {
      results[k] = left[i]
      i++;
    } else if (left[i] > right[j]) {
      results[k] = right[j]
      j++;
    } else if (left[i] === right[j]) {
      results[k] = left[i]
      i++;
    }
  }
  return results;
}


console.log(merge([1, 2, 4], [2, 5, 8]));
