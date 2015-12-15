

// var test1 = [[2, 6], [4, 5]];
// var test2 = [[2, 6], [4, 7]];
// var test3 = [[1, 3], [2, 4], [5, 6]];



// var test3 = [[1, 3], [2, 4], [5, 6]];
// var test4 = [[1, 3], [2, 3]];
// // var test4 = [[1, 3], [0, 1], [-3, -2]];
// var test5 = [[1, 3], [0, 4]];

// var test6 = [[1,2], [2,3]];

// var test7 = [[0,1],[2,3]];
// var test8 = [[2,6],[3,5]];


// var test = [ [0, 1], [3, 5], [4, 8], [10, 12], [9, 10] ];

var test2 =[[0,1], [3, 5], [4, 8]];
var test3 =[[0,1], [3, 5], [2, 4]];
// var test3 =[[0,1], [-3, -2]];
// answer =>[ [0, 1], [3, 8], [9, 12] ]
function merge(arr) {
  var results = [];
  results.push(arr[0]);
  var lowest = arr[0][0];
  var highest = arr[0][1];

  for (var i = 1; i < arr.length; i++) {
    var currArr = arr[i];
    var prevArr = arr[i-1];

    var currLow = currArr[0];
    var currHigh = currArr[1];

    var prevLow = prevArr[0];
    var prevHigh = prevArr[1];

    if (currLow > highest) {
      results.push(currArr);
      highest = currHigh;
    }

    if (currHigh < lowest) {
      results.unshift(currArr);
      lowest = currLow;
    }

    if (currHigh < prevHigh) {
      
    }

    // if (currLow )

    
   }
  return results;
}

// console.log(merge(test1));
console.log(merge(test2));
console.log(merge(test3));
// console.log(merge(test4));
// console.log(merge(test5));
// console.log(merge(test6));
// console.log(merge(test7));
// console.log(merge(test8));

// if (currHigh >= highest) {
//   if (currLow <= lowest) {
//     results[i-1][0] = currLow;
//     results[i-1][1] = currHigh;
//     continue;
//   } else if (currLow <= highest) {
//     results[i-1][1] = currHigh;
//     continue;
//   } else if (currLow >= highest) {
//     results.push(currArr);
//     lowest = currLow;
//     highest = currHigh;
//   }
//   // lowest = currLow;
//   // highest = currHigh;
// } 
// if (currHigh >= lowest) {
//   if (currLow <= lowest) {
//     results[i-1][0] = currLow;
//     continue;
//   } else if (currLow >= lowest) {
//     continue;
//   }
// } 
