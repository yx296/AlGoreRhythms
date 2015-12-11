// getting objects to share behaviours and to be able to override shared behaviours
//with specifics ones

//polymorphism objects can share the same interface--- similar method names, but they do different things


var Shape = function() {

}

Shape.prototype.draw = function() {
  return "I am a generic shape";
}

var Circle = function() {

}

Circle.prototype = Object.create(Shape.prototype);

Circle.prototype.draw = function() {
  return "I am a Circle";
}


var Square = function() {

}
Square.prototype = Object.create(Shape.prototype);
Square.prototype.draw = function() {
  return "I am a Square";
}

var Triangle = function() {

}

Triangle.prototype = Object.create(Shape.prototype);

var shapes = [new Shape(), new Circle(), new Square(), new Triangle()];

shapes.forEach(function(shape) {
  console.log(shape.draw());
});
