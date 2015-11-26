var arr =  [1, 2, 3, 5, 6];


function recursePrintArray(arr) {
  if (arr.length === 0) {
    return;
  }
  console.log(arr[0]);
  arr = arr.slice(1);
  recursePrintArray(arr);
}


recursePrintArray(arr);
