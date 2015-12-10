// Given a list, return all subsets. Example:



// Input: [1,2,3]

// Output: [[],[1],[2],[3],[1,2],[1,3],[2,3],[1,2,3]]


function powerset(ary) { debugger
  var ps = [[]];
  for (var i=0; i < ary.length; i++) {
    for (var j = 0, len = ps.length; j < len; j++) {
      ps.push(ps[j].concat(ary[i]));
    }
  }
  return ps;
}
 

console.log(powerset([1, 2, 3])); 




