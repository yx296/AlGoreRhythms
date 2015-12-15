var test1 = [2, -5, 1, -7, 3, 6];
var test2 = [1, 6, -3, 2, 4];


function largestProduct(arr) { debugger
  var highest = arr[0];
  var lowest = arr[0];

  var highestProduct = arr[0] * arr[1];


  for (var i = 1; i < arr.length; i++) {
    var current = arr[i];
    var highestProductPos = current * highest;
    var highestProductNeg = current * lowest;

    var highestProductPosNeg = Math.max(highestProductPos, highestProductNeg);

    var highestProduct = Math.max(highestProduct, highestProductPosNeg);

    var highest = Math.max(current, highest);
    var lowest = Math.min(current, lowest);
  }
  return highestProduct;
}


console.log(largestProduct(test1));
console.log(largestProduct(test2));

