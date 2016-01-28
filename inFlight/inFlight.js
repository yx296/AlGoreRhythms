function inFlight(flightLength, movieLengths) {
  var movieLengthsSeen = {};

  for (var i = 0; i < movieLengths.length; i++) {
    var firstMovieLength = movieLengths[i];
    var matchingSecondMovieLength = flightLength - firstMovieLength;
    if (movieLengthsSeen[matchingSecondMovieLength]) {
      return true;
    }
    movieLengthsSeen[firstMovieLength] = true;
  }
  return false;
}

console.log(inFlight(100, [40, 30, 60, 50, 35]));
console.log(inFlight(120, [40, 30, 60, 50, 45, 0]));
console.log(inFlight(120, [120, 0, 30]));
console.log(inFlight(120, [120, 0, 30]));


// function inFlight(flightLength, movieLengths) { debugger
//   var hash = {};

//   for (var i = 0; i < movieLengths.length; i++) {
//     var movieLength = movieLengths[i];
    
//     if (!hash[flightLength - movieLength]) {
//       hash[flightLength - movieLength] = i;
//     } 

//     if (typeof hash[movieLength] === 'number' && hash[movieLength] !== i) {
//       return true;
//     }
//   }
//   return false;
// }

















