var Node = function(val) {
  this.val = val;
  this.next = null;
}

var a = new Node('r');
var b = a.next = new Node('a');
var c = b.next = new Node('c');
var d = c.next = new Node('e');
var e = d.next = new Node('c');
var f = e.next = new Node('a');
var g = f.next = new Node('r');



function findMidPoint(linkedList) {
  var slow = linkedList;
  var fast = linkedList;

  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next
  }

  if (fast) {
    return slow.next
  } else {
    return slow;
  }
}

function checkPalindrome(linkedList) {
  var midpoint = findMidPoint(linkedList);
  
  var firstHead = linkedList;
  var secondHead = reverseLL(midpoint);

  
  while (secondHead) {
    if (secondHead.val !== firstHead.val) {
      return false;
    }
    secondHead = secondHead.next;
    firstHead = firstHead.next;
  }
  return true;
}


function reverseLL(root) {
  var prevNode = null;
  var currNode = root;
  var nextNode;
  while (currNode) {
    nextNode = currNode.next;
    currNode.next = prevNode;
    prevNode = currNode;
    currNode = nextNode;
  }
  return prevNode;
}

console.log(checkPalindrome(a));
