// function myConcat(arguments, separator) {
//   var resArr = [];
//   for (var i = 0; i < arguments.length; i++) {
//     resArr.push(arguments[i]);
//     resArr.push(separator);
//   }
//   return resArr.join("");
// }

// console.log(myConcat(["Code","Fight","On","!"]," "));

// ="Code/Fight/On/!/"


function RunLength(str) {

  var count = 1;
  var result = [];

  for (var i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
        count++;
    } else {
      result.push(parseInt(count + str[i]));
      count = 1;
    }
  }
  return result;
}

console.log(RunLength('111225'));
