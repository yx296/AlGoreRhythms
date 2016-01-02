// bind and call

function Answer (value) {
  this._val = value;
}


Answer.prototype.get = function fn1() {
  return this._val;
}

var lifeAnswer = new Answer(42);
lifeAnswer.get();

var dessertAnswer




















// var AnswerPrototype = {
//   constructor: function fn0 (value) {
//     this._val = value;
//   },
//   get: function fn1() {
//     return this._val;
//   }
// };

// var lifeAnswer = Object.create(AnswerPrototype);
// lifeAnswer.constructor(42);
// console.log(lifeAnswer.get());

// var dessertAnswer = Object.create(AnswerPrototype);
// dessertAnswer.constructor(3.14);
// console.log(dessertAnswer.get());


// var FirmAnswerPrototype = Object.create(AnswerPrototype);

// FirmAnswerPrototype.get = function fn2 (argument) {
//   return AnswerPrototype.get.call(this) + "!!";
// };

// var luckyAnswer = Object.create(FirmAnswerPrototype);
// luckyAnswer.constructor(7);
// console.log(luckyAnswer.get());
