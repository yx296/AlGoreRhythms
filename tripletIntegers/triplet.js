//brute force solution to get triplets equal to sum

// function triplets(arr, sum) { debugger
//   var results = [];
//   for (var i = 0; i < arr.length; i++) {
//     for (var j = i + 1; j < arr.length; j++) {
//       for (var k = j + 1; k < arr.length; k++) {
//         if (arr[i] + arr[j] + arr[k] === sum) {
//           results.push([arr[i], arr[j], arr[k]]);
//         }
//       }
//     }
//   }
//   return results;
// }

//get triplets greater than sum

function tripletsGreaterThanSum(arr, sum) { debugger
  var results = []
  
  arr.sort(function(a, b) {
    return a - b;
  })

  for (var i = 0; i < arr.length - 2; i++) {
    var left = i + 1;
    var right = arr.length - 1;
    
    while (left < right) {
      if (arr[i] + arr[left] + arr[right] > sum) {
        results.push([arr[i], arr[left], arr[right]]);
      }
      left++;
    }
  }
  return results;
}


function tripletsEqualToSum(arr, sum) {
  var results = []
  
  arr.sort(function(a, b) {
    return a - b;
  })

  for (var i = 0; i < arr.length - 2; i++) {
    var left = i + 1;
    var right = arr.length - 1;
    
    while (left < right) {
      if (arr[i] + arr[left] + arr[right] === sum) {
        results.push([arr[i], arr[left], arr[right]]);
        break; //no need to fiddle around with left and right pointers anymore, just increment i
      } else if (arr[i] + arr[left] + arr[right] < sum) {
        left++;
      } else {
        right--;
      }
    }
  }
  return results;
}
 
// console.log(tripletsGreaterThanSum([3, 7, 8, 9, 12], 24));
// console.log(tripletsGreaterThanSum([1, 3, 4, 6, 9, 12], 24));
console.log(tripletsEqualToSum([3, 7, 8, 9, 12], 24));
console.log(tripletsEqualToSum([1, 3, 4, 6, 9, 12], 24));
