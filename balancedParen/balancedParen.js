function parenthesesAreBalanced(string) { debugger
  var parentheses = "[]{}()";
  var stack = [];
  var i, character, bracePosition;

  for(i = 0; character = string[i]; i++) {
    bracePosition = parentheses.indexOf(character);

    if(bracePosition === -1) {
      continue;
    }

    if(bracePosition % 2 === 0) { // if character is an opening bracket
      stack.push(bracePosition + 1); // push next expected brace position
    } else {
      if(stack.length === 0 || stack.pop() !== bracePosition) {
        return false;
      }
    }
  }

  return stack.length === 0;
}


// console.log(parenthesesAreBalanced('{{'));
// console.log(parenthesesAreBalanced('[(])'));
console.log(parenthesesAreBalanced("{}([])"));
// console.log(parenthesesAreBalanced("([}])"));
// console.log(parenthesesAreBalanced("([])"));
// console.log(parenthesesAreBalanced("()[]{}[][]"));
