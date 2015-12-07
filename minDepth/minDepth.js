function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
 
var bTree1 = new TreeNode(5);
bTree1.left = new TreeNode(3);
bTree1.right = new TreeNode(7);
bTree1.left.left = new TreeNode(1);
// bTree1.left.left.left = new TreeNode(0);


bTree1.left.right = new TreeNode(4);
// console.log(bTree1);

var minDepth = function(root) { debugger
  
  //this is an empty tree
  if (root === null) {
    return 0;
  }

  // if node doesn't have a left or a right, its a leaf, end of path, return 1
  if (root.left === null && root.right === null) {
    return 1;
  }

  //this non-leaf node only has a right child, forced to go down that right child path
  if (root.left === null) {
    return minDepth(root.right) + 1;
  }

  //this non-leaf node only has a left child
  if (root.right === null) {
    return minDepth(root.left) + 1;
  }
  //this non-leaf node has both left child and right child
  return 1 + Math.min(minDepth(root.left), minDepth(root.right));
  //1 counts the rootNode, than choose the min between minDepth of the left node and mindepth of the right node
} 



console.log(minDepth(bTree1));


























//my solution


// TreeNode.prototype.BF = function() {
//   var queue = [];
//   var results = [];
//   queue.push({tree: this, depth: 1});

//   while (queue.length) {
//     var item = queue.shift();
//     var tree = item.tree;
//     var depth = item.depth;

//     results.push(item);

//     if (tree.left) {
//       queue.push({tree: tree.left, depth: depth + 1 });
//     }

//     if (tree.right) {
//       queue.push({tree: tree.right, depth: depth + 1 });
//     }
//   }

//   return results;
// }

















// var minDepth = function(root) {
//   if (!root) {
//     return 0;
//   }
//   var results = root.BF();
//   var minDepth = Number.POSITIVE_INFINITY;
  
//   for (var i = results.length - 1; i >= 0; i--) {
//     var treeObj = results[i];
//     if (treeObj.tree.left === null && treeObj.tree.right === null) {
//       if (treeObj.depth < minDepth) {
//         minDepth = treeObj.depth;
//       }
//     }
//   }
//   return minDepth;
// }

