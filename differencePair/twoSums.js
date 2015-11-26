var array = [0, 1, 3, 4, 7, 10];
var sum = 5;

//hash Approach (O(n) time complexity), (O(n), space complexity)

function twoSums(array) {
  var hash = {}
  for (var i = 0; i < array.length; i++) {
    var number = array[i];
    hash[number] = number;
  }

  for (var number in hash) {
    if (hash[sum-number]) {
      return true;
    }
  }
  return false;
}


function twoSums(array) {
  var hash = {}
  for (var i = 0; i < array.length; i++) {
    var number = array[i];
    hash[number] = number;
  }

  for (var number in hash) {
    if (hash[sum-number]) {
      return true;
    }
  }
  return false;
}

console.log(twoSums(array));






