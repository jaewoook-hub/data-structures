var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  var stackSize = 0;
  someInstance.push = function(value) {
    storage[stackSize] = value;
    stackSize++;
  };

  someInstance.pop = function() {

    if (stackSize > 0) {
      stackSize--;
    }

    var poppedValue = storage[stackSize];

    delete storage[stackSize];
    return poppedValue;
  };

  someInstance.size = function() {
    return stackSize;
  };

  return someInstance;
};


