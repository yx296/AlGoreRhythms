//A child is running up a staircase with n steps and can hop either 1 step, 2 steps, or 3 steps at a time.
//Implement a method to count how many possible ways the child can run up the stairs

// my solution

var runUpSteps = function(n, accum) {
  var count = 0;
  var steps = [1, 2, 3];
  accum = accum || 0;

  for (var i  = 0; i < steps.length; i++) {
    var step = steps[i]; //one 
    
    if (accum + step === n) {
      count++;
    }

    if (accum + step > n) {
      return count;
    }

    count+= runUpSteps(n, accum + step);
  }

  return count;
}



//CTCI brute force solution

var runUpStepsCTCI = function(n) {
  if (n < 0) {
    return 0;
  } else if (n === 0) {
    return 1;
  } else {
    return runUpStepsCTCI(n-1) + runUpStepsCTCI(n-2) + runUpStepsCTCI(n-3);
  }
}


console.log(runUpStepsCTCI(3));
// console.log(runUpSteps(22));
