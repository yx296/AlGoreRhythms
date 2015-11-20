// Write a function which takes an array of arrays (each of which contains numbers sorted from largest to smallest), 

// and a number (n). Return the n largest numbers.

// For example:

// Do this without copying or modifying the arrays (just read from them).
// Optimize for time complexity.

function BinaryHeap () {
  this._heap = [];
  this._compare = function (i, j) { return i < j };
}

BinaryHeap.prototype.insert = function (node) {
  // add node to end of heap
  this._heap.push(node);
  // locate node’s parent
  var index = this._heap.length - 1;
  var parentIndex = Math.floor( (index - 1) / 2 );
  // while node has parent and is less than parent
  while ( index > 0 && ( this._compare(this._heap[index], this._heap[parentIndex]) ) ) {
    // swap node and parent
    swapNodesAt(index, parentIndex, this);
    index = parentIndex;
    parentIndex = Math.floor( (index - 1) / 2);
  }
}

BinaryHeap.prototype.removeRoot = function () {
  // swap root node with last node
  swapNodesAt(this._heap.length - 1, 0, this);
  // remove last node and store it to be returned later
  var originalRoot = this._heap.pop();
  var temporaryRootIndex = 0;
  // compare children nodes to get the index of the lesser of them
  var lesserChildIndex = getLesserChildIndex(temporaryRootIndex, this);
  // while there are children nodes and the lesser of them is less than the new root
  while ( lesserChildIndex && this._compare(this._heap[lesserChildIndex], this._heap[temporaryRootIndex]) ) {
    // swap the root node with the lesser of its children
    swapNodesAt(lesserChildIndex, temporaryRootIndex, this);
    temporaryRootIndex = lesserChildIndex;
    lesserChildIndex = getLesserChildIndex(temporaryRootIndex, this);
  }
  // return original root node we stored earlier
  return originalRoot;
}

function swapNodesAt(index, parentIndex, binaryHeap) {
  var heap = binaryHeap._heap;

  var temp = heap[index];
  heap[index] = heap[parentIndex];
  heap[parentIndex] = temp;
}

function getLesserChildIndex (parentIndex, binaryHeap) {
  var childIndices = [parentIndex * 2 + 1, parentIndex * 2 + 2].filter(function (index) {
    return index < binaryHeap._heap.length;
  });
  // compare children nodes to get the index of the lesser of them
  if ( binaryHeap._compare(binaryHeap._heap[childIndices[0]], binaryHeap._heap[childIndices[1]]) ) {
    return childIndices[0];
  } else {
    return childIndices[1];
  }
}



var bHeap = new BinaryHeap();
bHeap.insert(5);
bHeap.insert(4);
bHeap.insert(9);
console.log(bHeap);


// function findLargest(numberArrays, n ) {
//   var results = [];
//   var pointers = [];

//   for (var x = 0; x < numberArrays.length; x++) {
//     pointers.push(0);
//   }
  
//   while (results.length < n) {
//     var subMaxes = [];
//     for (var i = 0; i < pointers.length; i++) {
//       var point = pointers[i];
//       subMaxes.push(numberArrays[i][point]);
//     }
//     var max = Math.max.apply(null, subMaxes);
//     var indexOfMax = subMaxes.indexOf(max);
//     pointers[indexOfMax]++;
//     results.push(max);  
//   }
//   return results;
// }



// console.log(findLargest([ [10, 5, 3, 1], [9, 8, 7, 6], [11, 2, 1, 0] ], 5));
// console.log(findLargest([ [15, 5, 3, 1], [10, 8, 7, 6]], 3));


// should return [11, 10, 9, 8, 7]

