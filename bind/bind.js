//difference between call and bind

var sum = function(a, b) {
    return a + b;
};

var addToCall = sum.call(this, 123, 2);
var addToBind = sum.bind(this, 2);

console.log(addToCall);
console.log(addToBind(23));



var answer = {
  get: function fn1() {
    return this.val;
  },
  val: 42
}

var firmAnswer = Object.create(answer);

firmAnswer.get = function fn2() {
  return answer.get.bind(this)();
};

firmAnswer.val = 3.14159
console.log(firmAnswer.get());
