var array = [null, 5, null, 1, null, 5, null, 3, 2];


function swap(items, firstIndex, secondIndex){
  var temp = items[firstIndex];
  items[firstIndex] = items[secondIndex];
  items[secondIndex] = temp;
}



function movingZeros(array) {
  for (var i = 0; i < array.length; i++) {
    if (array[i]) {
      var indexOfElement = i;
      while (array[indexOfElement - 1] === null) { //while element to the left is null
        swap(array, indexOfElement, indexOfElement-1);
        indexOfElement = indexOfElement-1
      }
    } 
  }
  return array;
};


console.log(movingZeros(array));
