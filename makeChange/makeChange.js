function makeChange(amount, denom) { debugger
  var ways_of_doing_n_cents = [];

  for (var i = 0; i < amount + 1; i++) {
    ways_of_doing_n_cents.push(0);
  }

  ways_of_doing_n_cents[0] = 1;


  for (var j = 0; j < denom.length; j++) {
    var coin = denom[j];
    for (var higherAmount = coin; higherAmount < amount + 1; higherAmount++) {
      var higherAmountRem = higherAmount - coin;
      ways_of_doing_n_cents[higherAmount] += ways_of_doing_n_cents[higherAmountRem];
    }
  }

  return ways_of_doing_n_cents[amount]
}
console.log(makeChange(5, [1, 3, 5]));


























// function makeChange(amount, denom) {
  
//   var change = [];  

//   function recurse(amount, accum) {
//     var sum = accum.reduce(function(a, b) {
//       return a + b;
//     },0)

//     if (sum > amount) {
//       return;
//     }

//     if (sum === amount) {
//       change.push(accum.sort(function(a, b) { return a - b;}));
//       return;
//     }

//     for (var i = 0; i < denom.length; i++) {
//       var coin = denom[i];
//       recurse(amount, accum.concat(coin));
//     }
//   }

//   recurse(amount, []);

//   return change;
// }

