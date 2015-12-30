
function longestPalindrome(str) {
  var longest = '';

  function checkPalindrome(left, right) {
    while (left >= 0 && right < str.length && str[left] === str[right]) {
      left--;
      right++;
    }
    return str.slice(left+1, right)
  }

  for (var i = 0; i < str.length; i++) {
    var oddPalindrome = checkPalindrome(i-1, i+1);
    var evenPalindrome = checkPalindrome(i, i+1);

    if (oddPalindrome.length > longest.length) {
      longest = oddPalindrome;
    }

    if (evenPalindrome.length > longest.length) {
      longest = evenPalindrome;
    }
  }
  return longest;
}


// function checkPalindrome(str) {
//   return str === str.split("").reverse().join("");
// }

console.log(longestPalindrome('banana'));
console.log(longestPalindrome('bar'));
console.log(longestPalindrome('babbad'));
console.log(longestPalindrome('aaaa level eye redivider hannah'));
console.log(longestPalindrome('ddccbbaabbccdd'));

// console.log(checkPalindrome('racecar'));
// console.log(checkPalindrome('banana'));
