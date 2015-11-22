// Create a class RateLimiter that takes the following initialization parameters:
// - N : number of actions
// - Q : quantum in seconds

// It should have a method `Check()` that returns a boolean
// - True : if check has been called N times or more in Q seconds
// - False : otherwise


//What i was originally going to code until Will said it could be done much more concisely


var RateLimiter = function(n, q) {

  var q_millis = q * 1000;
  var timeStamps = [];  
  
  return { 
    Check: function() {
      timeStamps.push(Date.now());

      if(timeStamps.length < n) {
        return false;
      }
      var currentTime = timeStamps[timeStamps.length - 1];
      var earliestTime = timeStamps[0];

      return (currentTime - earliestTime) < q_millis;
       //if that result is less than this.q, that means it has been called N times or more in Q seconds
       // return true;
       // shift from timeStamps
       timeStamps.shift();
    },
    checkTimeStamps: function() {
      return timeStamps;
    }
  };
}

var rl = RateLimiter(3,1);

// console.log(rl.Check()); //False
// console.log(rl.Check()); //False
// console.log(rl.Check()); //True
// console.log(rl.Check()); //True
// console.log(rl.checkTimeStamps());

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


