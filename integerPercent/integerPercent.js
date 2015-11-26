
var array = [1, 3, 5, 5, 5]


function integerPercent(arr, x) {
  var decimalPercent = x/100; // 0.5
  var threshold = decimalPercent * arr.length;
  var hash = {};
  var results = [];

  for (var i = 0; i < array.length; i++) {
    var num = array[i];
    hash[num] ? hash[num]++ : hash[num] = 1;
  }
  

  for (var num in hash) {
    if (hash[num] > threshold) {
      results.push(num);
    }
  }
  return results;
}


console.log(integerPercent(array, 59));
