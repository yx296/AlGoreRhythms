var parts = ['shoulders', 'knees'];
var lyrics = ['head', 'and', 'toes']; // ["head", "shoulders", "knees", "and", "toes"]



for (var i = parts.length -1; i >=0 ; i--) {
  var part = parts[i];
  lyrics.splice(1, 0, part)
}


console.log(lyrics);
