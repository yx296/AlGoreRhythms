var array = [0, 1, 2, 3, 4, 6];
var sum = 7;

function twoSums(array) {
  var results = [];

  var hash = {};
  
  for (var i = 0; i < array.length; i++) {
    hash[array[i]] = array[i];
  }

  for (var j = 0; j < array.length; j++) {
    var num = array[j];
    if (hash[sum - num]) {
      results.push([num, sum - num]);
    }
  }


  return results;
}





console.log(twoSums(array));


