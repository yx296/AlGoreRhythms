var array1  = [7, 5, 2, 3, 4, 5, 6];
var array2  = [7, 5, 2, 3, 4, 12, 6];


function duplicateIntegers(arr) {
  var hash = {};

  for (var i = 0; i < arr.length; i++) {
    var number = arr[i];
    hash[number] ? hash[number]++ : hash[number] = 1;
    if (hash[number] > 1) {
      return true;
    }
  }
  return false;
}


console.log(duplicateIntegers(array1));
console.log(duplicateIntegers(array2));
