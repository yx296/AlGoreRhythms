


function oneAway(str1, str2) {
  if (str1 === str2) {
    return true;
  } 

  if (str1.length === str2.length) {
    var count = 0;
    for (var i = 0; i < str1.length; i++) {
      if (str1[i] !== str2[i]) {
        count++;
      }
    }
    return count === 1 ? true: false
  } else if (Math.abs(str1.length - str2.length) === 1) {
    var biggerStr = str1.length > str2.length ? str1 : str2;
    var smallerStr = str1.length > str2.length ? str2 : str1;
    var hash = {}

    for (var i = 0; i < biggerStr.length; i++) {
      var letter= biggerStr[i];
      hash[letter] = letter;
    }

    var flag = true;
    for (var j = 0; j < smallerStr.length; j++) {
      var smallLetter = smallerStr[j];
      if (!hash[smallLetter]) {
        return false;
      }
    }
    return true;
  }
  return false;
}



console.log(oneAway('pale', 'bake'));
console.log(oneAway('pale', 'bale'));
console.log(oneAway('pale', 'pal'));
console.log(oneAway('pale', 'pales'));
