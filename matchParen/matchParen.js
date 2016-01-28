var sentence1 = 'h((at)e)';
              // 01234567

var sentence2 = "Sometimes (when I nest them (my parentheticals) too much (like this (and this))) they get confusing.";


function matchParen(sentence, firstParenPos) {
  var leftParenCount = 1;

  for (var i = firstParenPos + 1; i < sentence.length; i++) {
    var char = sentence[i];
    if (char === '(') {
      leftParenCount++;
    }

    if (char === ')') {
      leftParenCount--;
      if (leftParenCount === 0) {
        return i;
      }
    }
  }
}


console.log(matchParen(sentence1, 1)); // 7
console.log(matchParen(sentence1, 2)); // 5
console.log(matchParen(sentence2, 10)); // 5

