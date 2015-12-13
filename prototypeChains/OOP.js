function Answer(value) {
  this._val = value;
}

Answer.prototype.get = function fn1() {
  return this._val;
};

var lifeAnswer = new Answer(42);

console.log(lifeAnswer.get());

var dessertAnswer = new Answer(3.14);

console.log(dessertAnswer.get());

function FirmAnswer(value) {
  Answer.call(this, value);
}

FirmAnswer.prototype = Object.create(Answer.prototype);

FirmAnswer.prototype.constructor = FirmAnswer;

FirmAnswer.prototype.get = function fn2() {
  return this._val + "!!" 
}

var luckyAnswer = new FirmAnswer(7);

console.log(luckyAnswer.get());
