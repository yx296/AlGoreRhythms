var lowercaseWords = {
  a: 'a',
  the: 'the',
  to: 'to',
  at: 'at',
  in: 'in',
  with: 'with',
  and: 'and',
  but: 'but',
  or: 'or'
}

//Always capitalize the first word in a title
//Always capitalize the last word in a title
//Lowercase the following words, unless they are the first or last word of the title:
//Uppercase any words not in the list above

function capitalize(sentence) {
  var words = sentence.split(" ");
  var firstWord = words[0]; //wHy
  var lastWord = words[words.length - 1]; //Fly

  words[0] = uppercaseWord(firstWord);
  words[words.length - 1] = uppercaseWord(lastWord);

  for (var i = 1; i < words.length -1; i++) {
    var word = words[i];
    if (lowercaseWords[word.toLowerCase()]) {
      words[i] = word.toLowerCase();
    } else {
      words[i] = uppercaseWord(word);
    }
  }
  return words.join(" ");
}


function uppercaseWord(word) {
  word = word.split("");
  word[0] = word[0].toUpperCase();
  for (var i = 1; i < word.length; i++) {
    word[i] = word[i].toLowerCase();
  }
  return word.join("");
}



var sentence1 = "i love solving problems and it is fun";
// I Love Solving Problems  and It Is Fun
var sentence2 = "wHy DoeS A biRd Fly?";


var sentence3 = "sTraNge AT CaSiNg";
// Why Does a Bird Fly


console.log(capitalize(sentence1));
console.log(capitalize(sentence2));
console.log(capitalize(sentence3));



