function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
 
var bTree1 = new TreeNode(5);
bTree1.left = new TreeNode(3);
bTree1.right = new TreeNode(7);
bTree1.left.left = new TreeNode(1);
bTree1.left.right = new TreeNode(4);
// console.log(bTree1);

TreeNode.prototype.BF = function() {
  var queue = [];
  var results = [];
  queue.push({tree: this, depth: 1});

  while (queue.length) {
    var item = queue.shift();
    var tree = item.tree;
    var depth = item.depth;

    results.push(item);

    if (tree.left) {
      queue.push({tree: tree.left, depth: depth + 1 });
    }

    if (tree.right) {
      queue.push({tree: tree.right, depth: depth + 1 });
    }
  }

  return results;
}


var minDepth = function(root) {
  if (!root) {
    return 0;
  }
  var results = root.BF();
  var minDepth = Number.POSITIVE_INFINITY;
  
  for (var i = results.length - 1; i >= 0; i--) {
    var treeObj = results[i];
    if (treeObj.tree.left === null && treeObj.tree.right === null) {
      if (treeObj.depth < minDepth) {
        minDepth = treeObj.depth;
      }
    }
  }
  return minDepth;
}

console.log(minDepth(bTree1));
