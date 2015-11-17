


function reverseWordsInPlace(sentence) {
  var words = sentence.split(" ");
  for (var i = 0; i < words.length; i++) {
    words[i] = reverseWord(words[i]);
  }
  return words;
}


function reverseWord(word) {
  var word = word.split("");
   for (var i = 0; i < Math.floor(word.length/2); i++) {
    swap(word, i, word.length - i - 1);
  }
  return word.join("");
};

function swap(word, idx1, idx2) {
  var temp = word[idx1];
  word[idx1] = word[idx2];
  word[idx2] = temp;
}

console.log(reverseWordsInPlace("The Prime Time of Your Life"));
// console.log(reverseWord('Primes'));





