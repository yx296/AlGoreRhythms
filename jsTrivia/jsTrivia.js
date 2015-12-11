// bind and call

var AnswerPrototype = {
  get: function fn1() {
    return this.val;
  }
};

var lifeAnswer = Object.create(AnswerPrototype);
lifeAnswer.val = 42;
console.log(lifeAnswer.get());

var dessertAnswer = Object.create(AnswerPrototype);
dessertAnswer.val = 3.14;
console.log(dessertAnswer.get());


