function puddleVolume( arr ) { debugger
  var count = 0;
  var currDisplace = 0;

  var tower1 = 0;
  var tower2 = 0;
  var currDisplaceBlock;
  var distanceTraveled = 0;

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i+1]) { 
      if (arr[i] > arr[i-1] && arr[i] > tower1) {
        tower1 = arr[i]
      } else if (arr[i-1] === undefined) {
        tower1 = arr[i];
      }  
    } 

    if (arr[i] < tower1 && arr[i] <= arr[i-1]) {
      currDisplace += arr[i];
      distanceTraveled++;
      currDisplaceBlock = arr[i];
    } else if (arr[i] > currDisplaceBlock) {
      tower2 = arr[i];
      if (tower1 && tower2) {
        count+= calcVolume(tower1, tower2, currDisplace, distanceTraveled);
        tower1 = 0;
        tower2 = 0;
        currDisplaceBlock = undefined;
        distanceTraveled = 0;
      }
    }
  }
  return count;
}

function calcVolume(tower1, tower2, currDisplace, distanceTraveled) {
  var maxHeight = Math.min(tower1, tower2);
  return maxHeight * distanceTraveled - currDisplace;
}

// console.log(puddleVolume([2, 1, 0, 2]));
// console.log(puddleVolume([2, 5, 1, 3, 1]));
console.log(puddleVolume([3, 1, 2, 1, 3]));
// console.log(puddleVolume([1, 2, 1, 1, 2]));
// console.log(puddleVolume([2, 1, 3, 1, 2, 1, 1, 4]));
