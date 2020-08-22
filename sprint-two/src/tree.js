var Tree = function(value) {
  var newTree = Object.create(treeMethods);
  newTree.value = value;
  newTree.children = []
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var childTree = Tree(value);
  this.children.push(childTree);
};

treeMethods.contains = function(target) {
  var foundElement = false;
  var childElements = this.children;
  if (this.value === target) {
    foundElement = true;
  } else {
    for (var i = 0; i < childElements.length; i++) {
      foundElement = foundElement || childElements[i].contains(target);
    }
  }
  return foundElement;
}

/*
 * Complexity: What is the time complexity of the above functions?
 */
