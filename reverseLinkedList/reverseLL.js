function Node(val) {
  this.val = val;
  this.next = null;
}


var a = new Node('a');
var b = a.next = new Node('b');
var c = b.next = new Node('c');



//reverse Linked List in Place

function reverseLL(root) {
  var prevNode = null;
  var currNode = root;
  var nextNode;
  while(currNode) {
    nextNode = currNode.next;
    currNode.next = prevNode;
    prevNode = currNode;
    currNode = nextNode;
  }
  return prevNode;
}


//reverse linkedList outOfPlace

function reverseLLOOP(root) {
  var currNode = root;
  var linkedListArr = [];
  while (currNode) {
    linkedListArr.push(currNode.val);
    currNode = currNode.next;
  }

  var prevNode = null;
  var currNode;

  for (var i = 0; i < linkedListArr.length; i++) {
    currNode = new Node(linkedListArr[i]);
    currNode.next = prevNode;
    prevNode = currNode;
  }
  return prevNode;
}


console.log(reverseLLOOP(a));
// console.log(c);
