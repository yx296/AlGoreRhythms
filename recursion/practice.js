//permutations with repititions
function perm(word, accum) {
  var results = [];

  if (accum.length === word.length) {
    return accum;
  } 

  for (var i = 0; i < word.length; i++) {
    var letter = word[i]
    results = results.concat(perm(word, accum + letter));
  }

  return results;
}

console.log(perm('abc', ""));





















