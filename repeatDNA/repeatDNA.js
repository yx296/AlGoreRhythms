var str = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT";

// Return:
// ["AAAAACCCCC", "CCCCCAAAAA"].


var findRepeatedDnaSequences = function(s) {
  var hash = {}
  var results = [];
  for (var i = 0; i < str.length; i++) {
    var sequence = str.slice(i, i+10);
    if (sequence.length === 10) {
      hash[sequence] ? hash[sequence]++ : hash[sequence] = 1;
    }
  }
  for (var sequence in hash) {
    if (hash[sequence] > 1) {
      results.push(sequence);
    }
  }
  // return hash;
  return results;
};

console.log(findRepeatedDnaSequences(str));

