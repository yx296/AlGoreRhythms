// Given an array of integers, find all triplets of integers  
// that add up to a number greater than a given threshold. 

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


function triplets(arr, sum) { debugger
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
        break;
      } else if (arr[i] + arr[left] + arr[right] < sum) {
        left++;
      } else if (arr[i] + arr[left] + arr[right] > sum) {
        right--;
      }
    }
  }
  return results;
}


console.log(triplets([1, 3, 4, 6, 9, 12], 24));
