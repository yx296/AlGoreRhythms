var arr = [2,1,1,0,2,3,4,4,3,6,6];


function findUnique(arr) {
  var hash = {};

  for (var i = 0; i < arr.length; i++) {
    var num = arr[i];
    hash[num] ? hash[num]++ : hash[num] = 1;
  }

  for (var num in hash) {
    if (hash[num] === 1) {
      return num
    }
  }

};


console.log(findUnique(arr));
