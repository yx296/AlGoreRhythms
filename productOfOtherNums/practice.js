var counter = function counter() {
  var count = 0;
  return {
    getCount: function getCount() {
      return count;
    },
    increment: function increment() {
      count += 1;
    }
  };
};


var counterObj = counter();
console.log(counterObj.getCount());
counterObj.increment();
console.log(counterObj.getCount());
