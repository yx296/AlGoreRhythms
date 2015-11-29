// Given a pattern and a string str, find if str follows the same pattern.

// Here follow means a full match, such that there is a bijection between a letter in pattern and a 
// non-empty word in str.

// Examples:
// pattern = "abba", str = "dog cat cat dog" should return true.
// pattern = "abba", str = "dog cat cat fish" should return false.
// pattern = "aaaa", str = "dog cat cat dog" should return false.
// pattern = "abba", str = "dog dog dog dog" should return false.

function wordPattern(pattern, str) {
  if (pattern === str) {
    return false;
  }
  
  var animals = str.split(" ");
  
  if (animals.length !== pattern.length) {
    return false;
  }
  
  var compareArr = [];
  for (var i  = 0; i < animals.length; i++) {
    var animal = animals[i];
    var letter = pattern[i];
    var animalObj = {};
    animalObj[letter] = animal;
    compareArr.push(animalObj);
  }
  var compareHash = {};
  // return compareArr;
  for (var j = 0; j < compareArr.length; j++) {
    var compareObj1 = compareArr[j];
    for (var k = j + 1; k < compareArr.length; k++) {
      var compareObj2 = compareArr[k];
      var key1 = Object.keys(compareObj1)[0];
      var key2 = Object.keys(compareObj2)[0];

      if (key1 === key2 && compareObj1[key1] !== compareObj2[key2]) {
        return false;
      }

      if (compareObj1[key1] === compareObj2[key2] && key1 !== key2) {
        return false;
      }
    }
  }
  return true;
}


console.log(wordPattern('abba', "dog cat cat dog"));

console.log(wordPattern('abba', "dog cat cat fish"));
console.log(wordPattern('aaaa', "dog cat cat dog"));
console.log(wordPattern('abba', "dog dog dog dog"));

