// Create a class RateLimiter that takes the following initialization parameters:
// - N : number of actions
// - Q : quantum in seconds

// It should have a method `Check()` that returns a boolean
// - True : if check has been called N times or more in Q seconds
// - False : otherwise

var RateLimiter = function(n, q) {
  var q_millis = q * 1000;
  var timeStamps = [];
  
  this.Check = function() {
    var currentTime = Date.now();
    timeStamps.push(currentTime);
    
    if (timeStamps.length === n) {
      var earliestTime = timeStamps.shift();
      return (currentTime - earliestTime) < q_millis;
    } else {
      return false;
    }

  }
}

var rl = new RateLimiter(3,1);

// console.log(rl.Check()); //False
// console.log(rl.Check()); //False
// console.log(rl.Check()); //True
// console.log(rl.Check()); //True

// setTimeout(function(){
//   console.log(rl.Check()); //False
//   console.log(rl.Check()); //False
//   console.log(rl.Check()); //True
//   console.log(rl.Check()); //True
// }, 1000);


setTimeout(function() {
  console.log(rl.Check());
}, 500);
//false
setTimeout(function() {
  console.log(rl.Check());
}, 1000);
//false
setTimeout(function() {
  console.log(rl.Check());
}, 1400);

setTimeout(function() {
  console.log(rl.Check());
}, 2600);

//false since 2600 - 1000 > 1000

//true since 1400-500 < 1000
