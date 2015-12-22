function balancedParen(str) {
  var stack = [];
  var opening = '[({'
  var closing = '])}';

  for (var i = 0; i < str.length; i++) {
    var char = str[i];
    if (opening.indexOf(char)  > -1) {
      stack.push(char);
    }  

    if (closing.indexOf(char) > -1) {  // if there is a closing bracket
      var closingIndex = closing.indexOf(char);
      // if last unclosed in stack is the complementary bracket of closing bracket, then
      // pop off that last unclosed in stack
      if (stack[stack.length - 1] === opening[closingIndex]) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.length === 0;
}


// console.log(balancedParen('[(])'));
// console.log(balancedParen('{{'));
// console.log(balancedParen("{}([])"));
console.log(balancedParen("}}"));
