var arr = [[[1, [2]],[3, [4, 5]]]];


function flatten(arr) { debugger
  var newArr = [];

  arr.forEach(function(a) {
    if(Array.isArray(a)) {
      newArr = newArr.concat(flatten(a));
    } else {
      newArr = newArr.concat(a);
    }
  });
  return newArr;
}

// console.log(flatten(arr));

// newArr = [].concat(flatten([1, 2]));

// flatten([1, 2]) --->
// [].concat(1)
// [1].concat(2)
// [1, 2]


// newArr = [1, 2].concat(flatten([3, [4, 5]]))
// console.log(flatten([3, [4, 5]]));

// flatten([3, [4, 5]])
// [3].concat(flatten([4, 5]))
console.log(flatten(arr));



