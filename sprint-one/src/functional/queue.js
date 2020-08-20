var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  var stackSize = 0;
  var shiftedIndex = 0;

  someInstance.enqueue = function(value) {
    storage[stackSize + shiftedIndex] = value;
    stackSize++;
  };

  someInstance.dequeue = function() {
    if (stackSize > 0) {
      stackSize--;
    }
    var shiftedValue = storage[shiftedIndex];
    delete storage[shiftedIndex];
    shiftedIndex++;
    return shiftedValue;
  };

  someInstance.size = function() {
    return stackSize;
  };

  return someInstance;
};
