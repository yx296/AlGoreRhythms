var matrix1 = [
                [1, 2, 3],
                [4, 5, 6],
                [7, 8, 9],
                [10, 11, 12] 
                           ];

var matrix2 = [
                [1, 2, 3, 4],
                [5, 6, 7, 8],
                              ];


var matrix3 = [
                [1, 2, 3, 4],
                [5, 6, 7, 8],
                [9, 10, 11, 12],
                [13, 14, 15, 16]
                              ];

var matrix4 = [
                [1],
                [2],
                [3],
                   ];


var matrix5 = [
                [1, 2],
                [3, 4],
                [5, 6],
                [7, 8] 
                      ];


function spiralMatrix(matrix) { debugger
  var startRowIdx = 0
  var endRowIdx = matrix.length - 1;
  var startColIdx = 0;
  var endColIdx = matrix[0].length - 1;

  var results = [];

  while (startRowIdx <= endRowIdx && startColIdx <= endColIdx) {
    for (var i = startColIdx; i <= endColIdx; i++) {
      results.push(matrix[startRowIdx][i]);
    }
    startRowIdx++;

    if (endRowIdx < startRowIdx) {
      break;
    }

    for (var j = startRowIdx; j <= endRowIdx; j++) {
      results.push(matrix[j][endColIdx]);
    }
    endColIdx--;

    if (endColIdx < startColIdx) {
      break;
    }

    for (var k = endColIdx; k >= startColIdx; k-- ) {
      results.push(matrix[endRowIdx][k]);
    }
    endRowIdx--;

    for (var l = endRowIdx; l >= startRowIdx; l--) {
      results.push(matrix[l][startColIdx]);
    }
    startColIdx++;

  }
  return results;
}


// console.log(spiralMatrix(matrix1));
// console.log(spiralMatrix(matrix2));
console.log(spiralMatrix(matrix3));
// console.log(spiralMatrix(matrix4));
// console.log(spiralMatrix(matrix5));
