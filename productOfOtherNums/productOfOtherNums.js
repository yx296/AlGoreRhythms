var arr = [2, 7, 3, 4];
  // [84, 12, 28, 21]

// function productOfOtherNums(arr) {
//   var result = [];

//   for (var i = 0; i < arr.length; i++) {
//     var slicedArr = arr.slice(i+1).concat(arr.slice(0, i));
//     var product = slicedArr.reduce(function(a, b) {
//       return a * b;
//     })
//     result.push(product);
//   }
//   return result;
// }

function productOfOtherNums(arr) { debugger
  var products_of_all_ints_before_index = [];

  var product_so_far = 1;

  for (var i = 0; i < arr.length; i++) {
    products_of_all_ints_before_index[i] = product_so_far;
    product_so_far *= arr[i];
  }

  product_so_far = 1;

  for (var j = arr.length - 1; j>= 0; j--) {
    products_of_all_ints_before_index[j] *= product_so_far;
    product_so_far *= arr[j];
  }

  return products_of_all_ints_before_index;
}


console.log(productOfOtherNums(arr));
