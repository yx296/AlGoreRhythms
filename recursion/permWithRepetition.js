function permStr(word, accum) {
  var results = [];
  
  if (accum.length === word.length) {
    return accum;
  } 

  for (var i = 0; i < word.length; i++) {
    var letter = word[i]
    results = results.concat(permStr(word, accum + letter));
  }

  return results;
}

// console.log(permStr('1234', ""));




// function permDigitsArr(inputArr) {
//   var results = [];

//   function permute(arr, accum) {
    
//     if (accum.length === inputArr.length) {
//       results.push(accum);
//       return;
//     }
    
//     for (var i = 0; i < arr.length; i++) {
//       var currentDigit = arr[i];
//       var remainDigits = arr.slice(0, i).concat(arr.slice(i + 1));
//       permute(remainDigits, accum.concat(currentDigit));
//     }
//   }

//   permute(inputArr, []);
//   return results;
// }


// console.log(permDigitsArr([1,2,3]));
