var BinaryTree = function(value){
  this.value = value;
  this.left = null;
  this.right = null;
};

BinaryTree.prototype.checkBST = function() { debugger
  var stack = [];
  stack.push([this, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY]);

  while(stack.length) {
    var treeArr = stack.pop();

    var node = treeArr[0];
    var lowerBound = treeArr[1];
    var upperBound = treeArr[2];

    if (node.value < lowerBound || node.value > upperBound) {
      return false;
    }

    if (node.left) {
      stack.push([node.left, lowerBound, node.value])
    }

    if (node.right) {
      stack.push([node.right, node.value, upperBound]);
    }
  }

  return true;
}







BinaryTree.prototype.getMax = function () {
  var results = this.inOrderDFS();
  return Math.max.apply(null, results);
}

BinaryTree.prototype.getMin = function () {
  var results = this.inOrderDFS();
  return Math.min.apply(null, results);
}

BinaryTree.prototype.inOrderDFS = function() { 
  var results = [];
  if (this.left) {
    results = results.concat(this.left.inOrderDFS());
  }
  results = results.concat(this.value);
  if (this.right) {
    results = results.concat(this.right.inOrderDFS());
  }

  return results;
}


BinaryTree.prototype.isBST = function() {
  // if the biggest value in the left subtree is greater than the root node value, than tree is not a BST
  if (this.left && this.left.getMax() > this.value) {
    return false;
  }

  //if the smallest value in the right subtree is less than root node value, than tree is not a BST
  if (this.right && this.right.getMin() < this.value) {
    return false;
  }

  //check recursively if left and right childNodes are also bsts, 
  if (this.left && !this.left.isBST() || this.right &&!this.right.isBST()) {
    return false;
  }
  return true;
}

// var binaryTree1 = new BinaryTree(8);
// binaryTree1.left = new BinaryTree(6);
// binaryTree1.left.left = new BinaryTree(4);

// console.log(binaryTree1.isBST());
// console.log(binaryTree1.checkBST());
// console.log(binaryTree1.findLevel())
// console.log(binaryTree1.checkBalance());

var binaryTree2 = new BinaryTree(50);
binaryTree2.left = new BinaryTree(30);
binaryTree2.right = new BinaryTree(80);
binaryTree2.left.left = new BinaryTree(20);
binaryTree2.left.right = new BinaryTree(60);
binaryTree2.right.left = new BinaryTree(70);
binaryTree2.right.right = new BinaryTree(90);


// console.log(binaryTree2.isBST());
console.log(binaryTree2.checkBST());

// console.log(binaryTree2.findLevel());
// console.log(binaryTree2.checkBalance());
// console.log(binaryTree2.dfsIterative());
// console.log(binaryTree2.dfsRecursive());

var binaryTree3 = new BinaryTree(7);
binaryTree3.left = new BinaryTree(4);
binaryTree3.right = new BinaryTree(9);
binaryTree3.left.left = new BinaryTree(1);
binaryTree3.left.right = new BinaryTree(6);

// console.log(binaryTree3.isBST());
// console.log(binaryTree3.findLevel());
// console.log(binaryTree3.checkBalance());

var binaryTree4 = new BinaryTree(5);
binaryTree4.left = new BinaryTree(1);
binaryTree4.right = new BinaryTree(8);
binaryTree4.right.left = new BinaryTree(9);
binaryTree4.right.right = new BinaryTree(12);
// console.log(binaryTree4.findLevel());
// console.log(binaryTree4.checkBalance());

// console.log(binaryTree4.isBST());


var binaryTree5 = new BinaryTree(6);
binaryTree5.right = new BinaryTree(4);

// console.log(binaryTree5.isBST());






