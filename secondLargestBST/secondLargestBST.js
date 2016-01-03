var BinarySearchTree = function(value){

  this.value = value;
  this.left = null;
  this.right = null;

};

BinarySearchTree.prototype.insert = function(nodeValue) {
  if (nodeValue < this.value) { 
    if (this.left) {
      this.left.insert(nodeValue);
      return;
    } 
    this.left = new BinarySearchTree(nodeValue);
  } 

  if (nodeValue > this.value) {
    if (this.right) {
      this.right.insert(nodeValue);
      return;
    } 
    this.right = new BinarySearchTree(nodeValue);
  }
};

// BinarySearchTree.prototype.getMax = function() {
//   var current = this;
//   while (current.right) {
//     current = current.right;
//   }
//   return current.value;
// }


BinarySearchTree.prototype.getMax = function() {
  var current = this;
  var largest = null;

  while (current) {
    if (!current.right) {
      largest = current;
    }
    current = current.right;
  }
  return largest.value;
}


BinarySearchTree.prototype.getMaxTree = function() {
  if (this.right) {
    return this.right.getMaxTree();
  }
  return this;
}



BinarySearchTree.prototype.getSecondMax = function() {
  // if node has no children(single node tree)
  if (!this.right && !this.left) {
    return this.value;
  }

  if (!this.right) {
    return this.left.getMax();
  }

  // if node has a greater right child which also has a greater right child, than recurse
  if (this.right && !this.right.right && !this.right.left) {
    return this.value;
  }
  //else we have a right subtree with more than one element, so largest and 2nd largest
  // are somewhere in that subtree, step right
  return this.right.getSecondMax();
}

BinarySearchTree.prototype.get2ndMax = function() { debugger
  if (!this.right && !this.left) {
    return this.value;
  }

  var current = this;

  while (true) {
    if (!current.right) {
      return current.left.getMax();
    }
    //current is parent of largest, and largest has no children so, current is 2nd largest
    if (current.right && !current.right.left && !current.right.right) {
      return current.value;
    }
    current = current.right;
  }
}



var bst0 = new BinarySearchTree(5);
// bst0.insert(2);
// bst0.insert(3);
// bst0.insert(10);

var bst1 = new BinarySearchTree(5);
bst1.insert(2);
bst1.insert(3);
// console.log(bst1);

var bst2 = new BinarySearchTree(5);
bst2.insert(2);
bst2.insert(3);
bst2.insert(8);
// console.log(bst2);


var bst3 = new BinarySearchTree(5);
bst3.insert(2);
bst3.insert(3);
bst3.insert(8);
bst3.insert(1);
bst3.insert(7);
bst3.insert(10);
bst3.insert(9);

// console.log(bst3);



// console.log(bst.getMin());
// console.log(bst3.getMax());
// console.log(bst2.getMax());
// console.log(bst1.getMax());
// console.log(bst1.getMax());

// console.log(bst0.get2ndMax()); //5
// console.log(bst1.get2ndMax()); //3
// console.log(bst2.get2ndMax()); //5
// console.log(bst3.get2ndMax()); //9


console.log(bst0.getSecondMax()); //5
console.log(bst1.getSecondMax()); //3
console.log(bst2.getSecondMax()); //5
console.log(bst3.getSecondMax()); //9
