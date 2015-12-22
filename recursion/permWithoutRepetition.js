var permute = function(arr, accum) { debugger
  var results = [];
  var accum = accum || [];

  if (arr.length === 0) {
    return accum;
  }

  for (var i = 0; i < arr.length; i++) {
    var num = arr[i];
    var remainingNums = arr.slice(0, i).concat(arr.slice(i + 1));
    results = results.concat(permute(remainingNums, accum.concat(num)))
  }

  return results;
}


console.log(permute([1,2,3]));






// var allAnagrams = function(stringRem, accum) { 
//   var results =  [];

//   if (stringRem.length === 0) {
//     return accum;
//   }

//   for (var i = 0; i < stringRem.length; i++) {
//     var letter = stringRem[i];
//     var stringRemainingLetters = stringRem.slice(0, i) + stringRem.slice(i + 1);

//     results = results.concat(allAnagrams(stringRemainingLetters, accum+letter));
//   }

//   return results;
// };



// console.log(allAnagrams('abc', ''));





  // var recurse = function(perm, rem ) {
  //   //base case
  //   if (perm.length === string.length) {
  //     results.push(perm);
  //     return;
  //   } 
  //   for (var i = 0; i < rem.length; i++) { 
  //     recurse(perm + rem[i], rem.slice(0, i) + rem.slice(i + 1));
  //   }
  // }
  // recurse('', string);
  // return results;
