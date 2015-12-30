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


for (var i = 0; i < 5; i++) {
  setTimeout(function() { console.log(i);}, i * 1000);
}



//But the meat of the question is about closures[1] . In the original version, every time the function passed
 // to setTimeout is invoked, it is referring to i in the original closure, in which the for loop has 
 // finished running and i is 10.
// By using an IIFE (or breaking the timeout into a separate named function), 
// you create a new closure on each run of the loop, passing the value of the variable 
// at the time the closure was created, which is then what it will be when the anonymous 
// function passed to setTimeout gets invoked.



// 5 setTimeouts all get put on eventloop, 1 second later, they are all logged

//when a function accesses a variable outside its immediate scope, it accesses that variable, 
//not a frozen copy

// for (var i = 0; i < 5; i++) {
//   setTimeout(function(frozenI) { 
//     return function() {
//       console.log(frozenI);
//     }
//   }(i), i * 100)
// }


// So when we pass i to the outer anonymous function as its one argument, we create a new number inside the 
// outer anonymous function called frozenI that has the value that i had at that moment (0, 1, or 2)



// for (var i = 0; i < 5; i++) {
//   setTimeout(function() { 
//     console.log(i);
//   }, i * 1000)
// }
