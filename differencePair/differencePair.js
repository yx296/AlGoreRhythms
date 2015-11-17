
var array = [1, 7, 5, 9, 2, 12, 3];
var difference = 2;

var answer = [[1, 3], [3, 5], [5, 7], [7, 9]];



function differencePair(array) {
  var results =  [];
  // array.sort(function(a, b) { return a - b });
  var hash = {};
  for (var i = 0; i < array.length; i++) {
    hash[array[i]] = array[i];
  }

  for (var j = 0; j < array.length; j++) {
    var num = array[j];
    if (hash[num + 2]) {
      results.push([num, num + 2])
    }
  }

  return results;
}



console.log(differencePair(array));
