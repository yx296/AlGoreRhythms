function LinkedListNode(val) {
  this.val = val;
  this.next = null;
}

var a = new LinkedListNode("Angel Food")
var b = new LinkedListNode("Bundt")
var c = new LinkedListNode("Cheese")
var d = new LinkedListNode("Devil's Food")
var e = new LinkedListNode("Eccles")

a.next = b
b.next = c
c.next = d
d.next = e

// my O(2n) solution


// function kthToLastNode(k, headNode) {
//   var linkedListLength = findLengthOfLinkedList(headNode);
//   var nodeCounter = linkedListLength + 1;

//   var currNode = headNode;

//   while (currNode) {
//     nodeCounter--;
//     if (k === nodeCounter) {
//       return currNode;
//     }
//     currNode = currNode.next
//   }
// }

// function findLengthOfLinkedList(headNode) {
//   var currNode = headNode;

//   var nodeCount = 0;
  
//   while (currNode) {
//     nodeCount++;
//     currNode = currNode.next;
//   }
//   return nodeCount;
// }


function kthToLastNode(k, headNode) {
  var leftNode = headNode
  var rightNode = headNode;

  for (var i = 0; i < k; i++) {
    rightNode = rightNode.next;
  }

  while (rightNode) {
    leftNode = leftNode.next;
    rightNode = rightNode.next;
  }
  return leftNode;
}





// console.log(findLengthOfLinkedList(a));
// console.log(kthToLastNode(2, a));
// console.log(kthToLastNode(1, a));
console.log(kthToLastNode(2, a));


// kth_to_last_node(2, a)
// # returns the node with value "Devil's Food" (the 2nd to last node)

