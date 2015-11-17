// var myObj = {
//   specialFunction: function() {
//     console.log('bejeegles');
//   },
//   getAsyncData: function(cb) {
//     cb();
//   },
//   render: function() {
//     this.getAsyncData(function() {

//       this.specialFunction();
//     }.bind(this));
//   }
// }

// myObj.render();


var foo = {
    x: 3
}

var bar = function(){
    console.log(this.x);
}

bar(); // undefined

var boundFunc = bar.bind(foo);

boundFunc(); // 3
