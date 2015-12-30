var arr = ['star', 'wars', 'star', 'luke', 'han', 'han'];

function mostCommonStr(arr) {
  var hash = {};
  
  var max = 0;
  var mostCommonStr;

  for (var i = 0; i < arr.length; i++) {
    var str = arr[i];
    hash[str] ? hash[str]++ : hash[str] = 1;

    if (hash[str] > max) {
      max = hash[str];
      mostCommonStr = str;
    }
  }


  return mostCommonStr;
}

console.log(mostCommonStr(arr));
