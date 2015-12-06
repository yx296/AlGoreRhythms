function uniquePaths(m, n) {
  return dfs(0, 0, m, n);
}

function dfs(i, j, m, n) { debugger
  // if robot has reached bottom right finish, that is a path.
  if (i === m-1 && j === n-1) {
    return 1;
  }
  // if robot is neither at bottom limit nor right limit
  if (i < m-1 && j < n-1) {
    return dfs(i + 1, j, m, n) + dfs(i, j+1, m, n);
  }

  if (i < m-1) {
    return dfs(i+1, j, m, n);
  }
  // robot has reached bottom limit, but can still go right
  if (j < n-1) {
    return dfs(i, j+1, m, n);
  }

  return 0;
}

console.log(uniquePaths(2, 3));



