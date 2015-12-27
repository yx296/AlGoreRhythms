// [
//      [1],
//     [1,1],
//    [1,2,1],
//   [1,3,3,1],
//  [1,4,6,4,1]
// ]



var generate = function(numRows) {
  var results = [];

  for (var i = 0; i < numRows; i++) {
    var level = [];
    for (var j = 0; j <= i; j++) {
      if (j === 0 || j === i) {
        level.push(1);
      } else {
        var prevLevel = results[i-1];
        var newValue = prevLevel[j - 1] + prevLevel[j];
        level.push(newValue);
      }
    }
    
    results.push(level);
  }



  return results;
}


console.log(generate(6));
