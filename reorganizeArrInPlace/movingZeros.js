var array = [0, 5, 0, 1, 0, 5, 0, 3, 2];


function swap(items, firstIndex, secondIndex){
  var temp = items[firstIndex];
  items[firstIndex] = items[secondIndex];
  items[secondIndex] = temp;
}



function movingZeros(array) {
  for (var i = 0; i < array.length; i++) {
    if (array[i]) {
      var indexOfElement = i;
      while (array[indexOfElement - 1] === 0) { //while element to the left is zero
        swap(array, indexOfElement, indexOfElement-1);
        indexOfElement = indexOfElement-1
      }
    } 
  }
  return array;
};


console.log(movingZeros(array));
