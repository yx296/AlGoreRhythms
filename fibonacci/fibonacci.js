var memo = {};


function nthFib(n) {
  if (memo[n]) {
    return memo[n];
  }

  if (n <=1 ) {
    memo[n] = n;
    return n;
  }
  memo[n] = nthFib(n-1) + nthFib(n-2);
  return memo[n];
  // return nthFib(n-1) + nthFib(n-2);
}



console.log(nthFib(40));
