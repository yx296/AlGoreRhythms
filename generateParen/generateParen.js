
function genParen(n) { 
  var results = [];

  function paren(left, right, string) { debugger
    if (left === 0 && right === 0) {
      results.push(string);
      return;
    }

    if (left > right) {
      return;
    }

    if (left > 0) {
      paren(left-1, right, string + "(");
    }

    if (right > 0) {
      paren(left, right-1, string + ")");
    }
  }

  paren(n, n, '');
  return results;
}

console.log(genParen(3));
// console.log(genParen(6));
