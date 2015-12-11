var test = [10, 9, 2, 5, 3, 7, 101, 18];

var lengthOfLIS = function(arr) {
  var n = arr.length;
  var lis = [];

  for (var a = 0; a < n; a++) {
    lis.push(1);
  }

  for (var i = 1; i < n; i++) {
    for (var j = 0; j < i; j++) {
      if (arr[i] > arr[j] && lis[i] < lis[j] + 1) {
        lis[i]= lis[j] + 1;
      }
    }
  }

  var max = 0

  for (var i = 0; i < n; i++) {
    max = Math.max(max, lis[i]);
  }

  return max;
};

//subsequence starting at 10  = [10, 101]
// 2, 3, 7 , 101
//5, 7, 101


console.log(lengthOfLIS(test));
// console.log(lengthOfLIS([10,9,2,5,3,4]));
