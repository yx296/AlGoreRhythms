//O(n^2)solutions

// function getMaxProfit(stocks) {
//   var max = 0;
//   for (var i = 0; i < stocks.length; i++) {
//     var buy = stocks[i];
//     for (var j = i + 1; j < stocks.length; j++) {
//       var sell = stocks[j]
//       if (stocks[j] - stocks[i] > max) {
//         max = stocks[j] - stocks[i];
//       }
//     }
//   }
//   return max;
// }

// function getMaxProfit(stocks) { 
//   var maxProfit = Number.NEGATIVE_INFINITY;
//   for (var i = 0; i < stocks.length; i++) {
//     var buy = stocks[i];
//     var remSellArr = stocks.slice(i+1);
//     var maxSell = Math.max.apply(null, remSellArr);
//     if (maxSell - buy > maxProfit) {
//       maxProfit = maxSell - buy;
//     }
//   }
//   return maxProfit;
// }

var stocks1 = [10, 7, 5, 8, 11, 9];
var stocks2 = [2, 6, 3, 7, 0, 3];
var stocks3 = [8, 6, 2, 1]
var stocks4 = [2, 0];

//Big O(n) version;

function getMaxProfit(stocks) { debugger
  var lowestPriceSoFar = stocks[0]; 
  var maxProfit = stocks[1] - stocks[0];       
  for (var i = 1; i < stocks.length; i++) {

    // if (stocks[i] - lowestPriceSoFar > maxProfit) {
    //   maxProfit = stocks[i] - lowestPriceSoFar;
    // } 
    maxProfit = Math.max(stocks[i] - lowestPriceSoFar, maxProfit);
    // if (stocks[i] < lowestPriceSoFar) {
    //   lowestPriceSoFar = stocks[i];
    // }
    lowestPriceSoFar = Math.min(lowestPriceSoFar, stocks[i]);

  }
  return maxProfit;
}

//interviewCake version

// function getMaxProfit(stocks) {
//   if (stocks.length < 2) {
//     return "Error";
//   }

//   var minPrice = stocks[0];
//   var maxProfit = stocks[1] - stocks[0];

//   for (var i = 1; i < stocks.length; i++) {
//     var currentPrice = stocks[i];
//     var potentialProfit = currentPrice - minPrice;

//     maxProfit = Math.max(maxProfit, potentialProfit);

//     minPrice = Math.min(minPrice, currentPrice);
//   }
//   return maxProfit;
// }



console.log(getMaxProfit(stocks1));
console.log(getMaxProfit(stocks2));
console.log(getMaxProfit(stocks3));
console.log(getMaxProfit(stocks4));


















