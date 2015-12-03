// String.prototype.repeatify = function(n) {
//   var res = "";
//   for (var i = 0; i < n; i++) {
//     res+=this;
//   }
//   return res;
// };



// var str = 'hello';


// console.log(str.repeatify(3));


// for (var i = 0; i < 6; i++) {
//   setTimeout(function() {
//     console.log(i);
//   }, 1000);
// } 


for (var i = 0; i < 6; i++) {
  (function(n) { 
    setTimeout(function() { console.log(n); }, i*100); 
  })(i);
}


