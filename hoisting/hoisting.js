function A(){
  var xxx = 1;
  (function B(){
    console.log(xxx);
  })();
}


console.log(A());

