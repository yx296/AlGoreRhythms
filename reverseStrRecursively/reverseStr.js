function reverseStr(str) {
  if (str.length === 1 || str === '') {
    return str;
  } 
  return reverseStr(str.slice(1)) + str[0];
}


console.log(reverseStr('pamf'));
