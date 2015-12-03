/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
  var squares = [];
  for (var i = 1; i * i <= n; i++) {
    squares.push(i * i);
  }    

  squares.reverse();
  var results = [];

  var recurse = function(accum, numbers) {
    if (accum === n) {
      results.push(numbers.length);
      return;
    } else if (accum > n) {
      return;
    } 
    for (var i = squares.length -1 ; i >=0; i--) {
      var number = squares[i];
      recurse(accum + number, numbers.concat(number));
    }
  };

  recurse(0, []);
  // return squares;
  return Math.min.apply(null, results)
};

console.log(numSquares(12));
console.log(numSquares(18));






function numSquares(n) {
  var map = [0]
  for (var i = 1; i <= n; i++) {
    var j = 1
    var min = i
    while (j * j <= i) {
      min = Math.min(min, 1 + map[i - j * j])
      j++
    }
    map[i] = min
  }
  return map[n]
}
