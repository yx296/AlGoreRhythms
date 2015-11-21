// Create a class RateLimiter that takes the following initialization parameters:
// - N : number of actions
// - Q : quantum in seconds

// It should have a method `Check()` that returns a boolean
// - True : if check has been called N times or more in Q seconds
// - False : otherwise

var RateLimiter = function(n, q) {

  var q_millis = q * 1000;
  var timeStamps = [];  
  
  return { 
    Check: function() {
      var currentTime = Date.now();
      timeStamps.push(currentTime);

      if(timeStamps.length < n) {
        return false;
      }
      //we can assume this.timeStamps.length === this.n
      //now check last element in this.timeStamps, subtract from first element 
      // console.log(timeStamps);
      var earliestTime = timeStamps.shift();
      return (currentTime - earliestTime) < q_millis;
       //if that result is less than this.q, that means it has been called N times or more in Q seconds
       // return true;
       // shift from timeStamps
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

//true since 1400-500 < 1000

setTimeout(function() {
  console.log(rl.Check());
}, 2600);

//false since 2600 - 1000 > 1000
