var Stack = function() {

  // var someInstance = Object.create(Stack.prototype);
  var someInstance = Object.create(stackMethods);

  someInstance.storage = {};
  someInstance.stackSize = 0;
  // How come
  // Object.create(Stack.prototype, {storage: {},stackSize: 0}); does not work?

  return someInstance;
};

var stackMethods = {
  push: function(val) {
    this.storage[this.stackSize] = val;
    this.stackSize++;
  },
  pop: function() {
    if (this.stackSize > 0) {
      this.stackSize--;
    }
    var poppedValue = this.storage[this.stackSize];
    delete this.storage[this.stackSize];
    return poppedValue
  },
  size: function() {
    return this.stackSize;
  }
}; // Why do we need this?


/*
Stack.prototype.push = function(val) {
  this.storage[this.stackSize] = val;
  this.stackSize++;
};

Stack.prototype.pop = function() {
    // if storage > 0
    if (this.stackSize > 0) {
      // decrement stackSize
      this.stackSize--;
    }
    // set poppedValue = lastElement of storage
    var poppedValue = this.storage[this.stackSize];
    // delete lastElement of storage
    delete this.storage[this.stackSize];
    // return lastElement
    return poppedValue;
};

Stack.prototype.size = function() {
  return this.stackSize;
};
*/


