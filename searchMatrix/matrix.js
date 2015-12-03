var matrix = [
  [1,   4,  7, 11, 15],
  [2,   5,  8, 12, 19],
  [3,   6,  9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
];



var searchMatrix = function(matrix, target) { debugger
  var startRowIdx = 0;
  var startColIdx = 0;
  var endRowIdx = matrix.length - 1;
  var endColIdx = matrix[0].length - 1;

  while (startRowIdx <= endRowIdx && endColIdx >= startColIdx) {
    if (matrix[startRowIdx][endColIdx] === target) {
      return true;
    } else if (matrix[startRowIdx][endColIdx] < target) {
      startRowIdx++;
    } else if (matrix[startRowIdx][endColIdx] > target) {
      endColIdx--;
    }
  } 
  return false;
};


// bool stepWise(int mat[][N_MAX], int N, int target, 
//               int &row, int &col) {
//   if (target < mat[0][0] || target > mat[N-1][N-1]) return false;
//   row = 0;
//   col = N-1;
//   while (row <= N-1 && col >= 0) {
//     if (mat[row][col] < target) 
//       row++;
//     else if (mat[row][col] > target)
//       col--;
//     else
//       return true;
//   }
//   return false;
// }
// console.log(searchMatrix(matrix, 5));
console.log(searchMatrix(matrix, 20));


