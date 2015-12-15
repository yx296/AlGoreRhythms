//with recursion;
// function reverseStr(str) {
//   if (str.length === 1 || str === '') {
//     return str;
//   } 
//   return reverseStr(str.slice(1)) + str[0];
// }


// console.log(reverseStr('pamf'));

var str = 'bro';

function swap(arr, idx1, idx2) {
  var temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

//with a for loop

// function reverseStr(str) {
//   strArr = str.split("");

//   for (var i = 0; i < Math.floor(str.length/2); i++ ) {
//     swap(strArr, i, str.length - i - 1);
//   }
//   return strArr.join("");
// }

// with a while loop
function reverseStr(str) {
  strArr = str.split("");

  var startIdx = 0;
  var endIndex = strArr.length - 1;

  while (startIdx < endIndex) {
    swap(strArr, startIdx, endIndex)

    startIdx++;
    endIndex--;
  }

  return strArr.join("");
}


console.log(reverseStr(str));

console.log(str);
