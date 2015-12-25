var rectangle1 = {
  'x': 1,
  'y': 1,
  'width': 3,
  'height': 2
}

var rectangle2 = {
  'x': 2,
  'y': 2,
  'width': 3,
  'height': 2
}

function rectangleOverLap(rectangle1, rectangle2) {
  var horizontalOverlap = getXOverLap(rectangle1.x, rectangle1.width, rectangle2.x, rectangle2.width);
  var verticalOverlap = getYOverLap(rectangle1.y, rectangle1.height, rectangle2.y, rectangle2.height);

  return horizontalOverlap * verticalOverlap;
}

console.log(rectangleOverLap(rectangle1, rectangle2));


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
