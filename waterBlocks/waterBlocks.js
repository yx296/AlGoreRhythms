function waterBlocks(arr) {
  var count  = 0;
  // first identify all towers
  
  var towers = [];
  var pits = [];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i+1]) {
      if (arr[i-1] === undefined || arr[i] > arr[i-1]) {
        var tower = {}
        tower[i] = arr[i];
        towers.push(tower);
      }
    } else if (arr[i] > arr[i-1] && arr[i+1] === undefined ) {
      var tower = {}
      tower[i] = arr[i];
      towers.push(tower);
    } else {
      pits.push(arr[i]);
    } 
  }

  for (var j = 0; j < towers.length; j++) {
    var tower1 = towers[j];
    var tower2 = towers[j+1];
  }
  console.log(pits);
  return towers;
}

function waterBetweenTowers(towerIdx1, towerIdx2) {

}


console.log(waterBlocks([2, 1, 3, 1, 2, 1, 1, 4]));
// console.log(waterBlocks([3, 1, 0, 2]));
// console.log(waterBlocks([2, 1, 2, 1, 2]));
// console.log(waterBlocks([3, 1, 2, 1, 3]));
