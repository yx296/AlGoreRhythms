// O(n^2) solution


// var commonElements = function (arr1, arr2) {
//   var output = []

//   for (var i = 0; i < arr1.length; i++) {
//     if (arr2.indexOf(arr1[i]) > -1) {
//       var indexDup = arr2.indexOf(arr1[i]);
//       output.push(arr1[i]);
//       arr2.splice(indexDup, 1);
//     }
//   }
//   //findwhich one is bigger array
//     //loop across that one checking if same value exists in smaller array
//   // return output;
//   return output;
// }

//O(n) solution

var commonElements = function (arr1, arr2) {
  var output = []
  var i = 0;
  var j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] === arr2[j]) {
      output.push(arr1[i]);
      i++;
      j++;
    } else if (arr1[i] > arr2[j]) {
      j++;
    } else if (arr1[i] <arr2[j]) {
      i++;
    }
  }

  return output;
}



console.log(commonElements([2, 5, 5, 5, 8], [2, 2, 3, 5, 5, 7]));

// console.log(commonElements([2, 2, 3, 5, 5, 7], [2, 5, 5, 5]));
console.log(commonElements([2, 2, 3], [2, 2, 4, 4]));
// var biggerArray = function (arr1, arr2) {
//   if (arr1.length > arr2.length)
// }
