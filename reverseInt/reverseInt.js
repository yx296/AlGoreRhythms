// var num = 12345;

function reverseInteger(number) { debugger
  var rev = 0;

  while (number !== 0) {
    //any number modulo 10 will give you the digits place, or itself if less than 10
    //rev * 10 to move it over to the next 10s place
    rev = rev * 10 + number % 10;
    //any number math.floored divided by 10 will shift it over one left
    number = Math.floor(number / 10);   
  }
  return rev;
}


console.log(reverseInteger(125));
// console.log(reverseInteger(12));


// console.log(11%10)
