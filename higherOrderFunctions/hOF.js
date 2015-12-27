var reduce = function(collection, iterator, accumulator) {
  for (var i = 0; i < collection.length; i++) {
    var elem = collection[i];
    if (!accumulator) {
      accumulator = elem;
      continue;
    }
    accumulator = iterator(accumulator, elem);
  }
  return accumulator;
};


var numbers = [1, 2, 3, 4, 5];


var sum = reduce(numbers, function(accum, number) {
  return accum + number;
});

console.log(sum);


