// Condense a sorted integer array so that [1,1,1,3,3,5] becomes [31,23,5] (= 3 1's, 2 3's, 5)

var arr = [1,1,1,3,3,5];

function condenseSorted(arr) {
  var results = [];

  var count = 1;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i+1]) {
      count++;
    } else {

      results.push(parseInt(count.toString() + arr[i]));
      count = 1;
    }
  }
  return results;
}



console.log(condenseSorted(arr));
