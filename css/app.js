var a = [1, 2, 3, 4];

a.splice(1, 0, 2);

// console.log(a);
a.push(2);
a.push(2);

// console.log(a);


var removeWithoutCopy = function(arr, item) {
  for (var i = 0; i < arr.length; i++) {
    var elem = arr[i];
    if (item === elem) {
      arr.splice(i, 1);
      i--;
    }
  }
  return arr;
}

console.log(removeWithoutCopy(a, 2));
