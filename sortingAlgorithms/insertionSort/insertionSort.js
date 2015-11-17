function insertionSort(arr) { debugger
  for (var i = 1; i < arr.length; i++) {
    var value = arr[i];
    var hole = i;

    //while there are still elements left of the hole and number left of hole is greater than value
    while (hole > 0 && arr[hole -1] > value) { 
      arr[hole] = arr[hole-1]; //move number greater than value into the hole
      hole = hole-1; // move hole 
    }
    arr[hole] = value; //fill in hole, if it never goes into while loop, hole is instantly refilled with value
  }
  return arr;
}




console.log(insertionSort([7, 2, 4, 1, 5, 3]));
