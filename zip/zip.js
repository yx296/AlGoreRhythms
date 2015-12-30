function zip(arrays) {
  var results = [];
  var args = Array.prototype.slice.call(arguments);
  for (var i = 0; i < args[0].length; i++) {
    var subRes = [];
    for (var j = 0; j < args.length; j++) {
      var subArr = args[j];
      subRes.push(subArr[i]);
    }
    results.push(subRes);
  }
  return results;
}

function unzip(arr) {
  var res = [];
  for (var i = 0; i < arr[0].length; i++) {
    var resArr = []
    for (var j = 0; j < arr.length; j++) {
      var subArr = arr[j];
      resArr.push(subArr[i]);
    }
    res.push(resArr);
  }
  return res;
}

// console.log(unzip([['moe', 'larry'], [30, 40], [true, false]]));
// console.log(zip(['moe', 'larry'], [30, 40], [true, false]));


// => ["moe", 30, true], ["larry", 40, false]











// console.log(zip(['katy', 'taylor', 'adele'], [31, 26, 27], [false, false, true]));
// console.log(zip(['katy', 'taylor'], [31, 26], [false, false]));



// _.zip(['moe', 'larry', 'curly'], [30, 40, 50], [true, false, false]);
// => [["moe", 30, true], ["larry", 40, false], ["curly", 50, false]]
