var makeBoard = function(m, n) {
  var board = [];
  for (var i = 0; i < m; i++) {
    board.push([]);
    for (var j = 0; j < n; j++) {
      board[i].push(false);
    }
  }
  board.togglePiece = function(i, j) {
    this[i][j] = !this[i][j];
  }
  board.hasBeenVisited = function(i, j) {
    return this[i][j];
  }
  return board;
};


var uniquePaths = function(m, n, board, i, j) {
  if (!board) {
    board = makeBoard(m, n);
    i = 0;
    j = 0;
  }

  if (i > m-1 || j > n-1) {
    return 0;
  }

  if (board.hasBeenVisited(i, j)) {
    return 0;
  }

  if (i === m - 1 && j === n - 1) {
    return 1;
  }

  board.togglePiece(i, j);
  var result = uniquePaths(m, n, board, i, j+1) +
    uniquePaths(m, n, board, i+1, j)
  board.togglePiece(i, j);

  return result;
}
// 

console.log(uniquePaths(3, 7));
// console.log(generateBoard(3, 7));

