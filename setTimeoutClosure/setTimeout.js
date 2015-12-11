for (var i = 0; i < 5; i++) {
  (function(x) { 
    setTimeout(function() { console.log(x); }, 1000 );
  })(i);
}
//5 setTimeouts all get put on eventloop, 1 second later, they are all logged


// for (var i = 0; i < 5; i++) {
//   (function(x) {
//     setTimeout(function() { console.log(x);}, x * 1000)
//   })(i)
// }


// for (var i = 0; i < 5; i++) {
//   (function(x) {
//     setTimeout(function() { console.log(x); }, x * 1000 );
//   })(i);
// }
