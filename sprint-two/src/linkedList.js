var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  // {a, b} -> {b, c} ->...

  list.addToTail = function(value) {
    var newNode = new Node(value);
    if (list.head === null) {
      list.head = newNode;
      list.tail = newNode;
    } else if (list.head.next === null) {
      list.head.next = newNode;
      list.tail = newNode;
    } else {
      list.tail.next = newNode;
      list.tail = newNode;
    }
  };

  list.removeHead = function() {
    // head = head.next
    // edge case: if list is empty,
      // return and empty object
    // edge case: if the list only has one element
    if (list.head.next = null) {

    }
    // {head: null, tail: null} -> addToTail(4) -> {head: {4, next: null}, tail: {4, next: null}}
      // if you do addToTail(4) then removeHead, should return an empty list
  };

  list.contains = function(target) {
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

var newLinkedList = LinkedList();
// {head: null, tail: null, addToTail: func() {}, etc}
var node0 = Node('hello');
// {value: 'hello', next: null}
newLinkedList.addToTail('hi'); // {head: {value: 'hello', next: null}, tail: {value: 'hello', next: null}}
// tail.next -> null
var node1 = Node('hi');
// {value: 'hi', next: null}
newLinkedList.addToTail(node1);
// {head: {value: 'hello', next: node1}, tail: {value: 'hi', next: null}}
newLinkedList.addToTail(node2);
// {head: node0, tail: node1}
// {head: {value: 'hello', next: node1}, tail: {value: 'node2val', next: null}}
// node1: {value: 'hi', next: node2}
// {head: node0, tail: node2}
newLinkedList.addToTail(node3);
// {head: node0, tail: node1}
// {head: {value: 'hello', next: node1}, tail: {value: 'node3val', next: null}}
// node1: {value: 'hi', next: node2}
// {head: node0, tail: node3}

newLinkedList.removeHead();
// we had this: {head: {value: 'hello', next: node1}, tail: {value: 'node3val', next: null}}
// after running removeHead, we have:
// {head: node1, tail: {value: 'node3val', next: null}}


