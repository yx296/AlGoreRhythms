//difference between call and bind

var sum = function(a, b) {
    return a + b;
};

var addToCall = sum.call(this, 123, 2);
var addToBind = sum.bind(this, 2);

console.log(addToCall);
console.log(addToBind(23));
