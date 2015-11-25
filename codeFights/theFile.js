function theFile(version1, version2) { debugger
  var smallerWord = version1.length > version2.length ? version2 : version1;
  var biggerWord = version1.length > version2.length ? version1 : version2;
  
  var res = '';

  for (var i = 0; i < smallerWord.length; i++) {
    var letter = smallerWord[i];
    var biggerWordMatchIdx = biggerWord.indexOf(letter)
    if (biggerWordMatchIdx > -1) {
      res+= letter;
      biggerWord = biggerWord.slice(biggerWordMatchIdx);
    }
  }

  return res;
}


// console.log(theFile('CodeFigh#ts', 'Co$deFig?hts'));

console.log(theFile("grHenllso weortlds!","H5elelo 1dworlbd!"));
// console.log(theFile("H5ello","grHesllo"));
