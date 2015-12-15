function Node(val) {
  this.val = val;
  this.next = null;
}


var a = new Node('a');
var b = a.next = new Node('b');
var c = b.next = new Node('c');

// console.log(a);

// function reverseLL(root) {
//   var prevNode = null;
//   var currNode = root;
//   var nextNode;
//   while(currNode) {
//     nextNode = currNode.next;
//     currNode.next = prevNode;
//     prevNode = currNode;
//     currNode = nextNode;
//   }
//   return prevNode;
// }

function reverseLLOOP(root) {
  var currNode = root;
  var linkedListArr = [];
  while (currNode) {
    linkedListArr.push(currNode.val);
    currNode = currNode.next;
  }

  var prevNode = new Node(linkedListArr[0]);
  var currNode;

  for (var i = 1; i < linkedListArr.length; i++) {
    currNode = new Node(linkedListArr[i]);
    currNode.next = prevNode;
    prevNode = currNode;
  }
  return prevNode;
}


console.log(reverseLLOOP(a));
console.log(a);
