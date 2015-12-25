var results = [ [ 1, 1, 1, 1 ],
  [ 1, 1, 2 ],
  [ 1, 1, 2 ],
  [ 1, 3 ],
  [ 1, 1, 2 ],
  [ 2, 2 ],
  [ 1, 3 ] ];

  // console.log(results);


function filter (arr) {

  var answers = []
  var hash = {};

  for (var i = 0; i < arr.length; i++) {
    var key = arr[i];
    hash[key] ? hash[key]++ : hash[key] = 1;
  }

  for (var key in hash) {
    answers.push(key);
  }
  return answers;
}


console.log(filter(results));
