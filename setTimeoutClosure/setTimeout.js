// var countAnswers =  {
//   count : function (start, end) {
//     for (var i = start; i <=end; i++) {
//       (function(x) {
//         setTimeout(function() {console.log(x);},i * 100);
//       })(i)
//     }
//   }
// };

// countAnswers.count(1, 5);

// for (var i = 0; i < 5; i++) {
//   (function(x) { 
//     setTimeout(function() { console.log(x); }, i * 100 );
//   })(i);
// }


// 5 setTimeouts all get put on eventloop, 1 second later, they are all logged

//when a function accesses a variable outside its immediate scope, it accesses that variable, 
//not a frozen copy

for (var i = 0; i < 5; i++) {
  setTimeout(function(frozenI) { 
    return function() {
      console.log(frozenI);
    }
  }(i), i * 100)
}


// So when we pass i to the outer anonymous function as its one argument, we create a new number inside the 
// outer anonymous function called frozenI that has the value that i had at that moment (0, 1, or 2)



// for (var i = 0; i < 5; i++) {
//   setTimeout(function() { 
//     console.log(i);
//   }, i * 1000)
// }
