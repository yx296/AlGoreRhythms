var deleteNode = function(currNode) {
  //assign pointer to node after node to be deleted(currNode)
  var nextNode = currNode.next;
  currNode.val = nextNode.val;
  currNode.next = nextNode.next
};


function ListNode(val) {
  this.val = val;
  this.next = null;
}

var a = new ListNode(0);
var b = a.next = new ListNode(1)
var c = b.next = new ListNode(2);

// console.log(a);
// console.log(b);


deleteNode(b);

console.log(a);

