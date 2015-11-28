var arr =  [1, 2, 3, 4, 5];


// function recursePrintArray(arr) {
//   if (arr.length === 0) {
//     return;
//   }
//   console.log(arr[0]);
//   arr = arr.slice(1);
//   recursePrintArray(arr);
// }

function recursePrintArray(arr, index) {
  index = index || 0;
  console.log(arr[index]);

  if (index === arr.length - 1) {
    return;
  }
  recursePrintArray(arr, index + 1);
}



recursePrintArray(arr);
