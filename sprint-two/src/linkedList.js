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

    if (list.head === null) { // checks if linked-list is empty
      return {};
    }

    var oldHead = list.head; // store old head
    list.head = list.head.next;

    return oldHead.value;
  };

  list.contains = function(target) {
    currentNode = list.head;
    if (currentNode === null) {
      return false;
    } else {
      while (currentNode.next !== null) {
        if (currentNode.value === target) {
          return true;
        }
        currentNode = currentNode.next;
      }
    }
    if (currentNode.next === null && currentNode.value === target) {
      return true;
    } else if (currentNode.next === null && currentNode.value !== target) {
      return false;
    }
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


