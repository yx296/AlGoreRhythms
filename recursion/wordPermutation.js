var perm = function (words, accum) { 
  var results = [];

  var currentWord = words[0];
  var remainingWords = words.slice(1);
  
  if (!currentWord) {
    return accum;
  }
 
  for (var i = 0; i < currentWord.length; i++) {
    var currentLetter = currentWord[i];
    results = results.concat(perm(remainingWords, accum+currentLetter));
  }

  return results;
 }


console.log(perm([ 'AB', 'CDE', 'FG'], ''));
