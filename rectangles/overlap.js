var range1 = [1, 5];
var range2 = [3, 7];
var range3 = [2, 4];
var range4 = [6, 8];


function getXOverLap(x1, width1, x2, width2) {
  var highest_start_point = Math.max(x1, x2);
  var lowest_end_point = Math.min(x1 + width1, x2 + width2);

  if (highest_start_point >= lowest_end_point) {
    return "No overlap";
  }

  var overLap_width = lowest_end_point - highest_start_point;

  return overLap_width;
}

function getYOverLap(y1, height1, y2, height2) {
  var highest_start_point = Math.max(y1, y2);
  var lowest_end_point = Math.min(y1 + height1, y2 + height2);

  if (highest_start_point >= lowest_end_point) {
    return "No overlap";
  }

  var overLap_height = lowest_end_point - highest_start_point;

  return overLap_height;
}

console.log(getXOverLap(1, 4, 3, 4));






// function getOverLap(line1, line2) {
  
//   var highest_start_point = Math.max(line1[0], line2[0]) // 3
//   var lowest_end_point = Math.min(line1[1], line2[1]); // 5

//   var overLap = lowest_end_point - highest_start_point;

//   return overLap;
// }


