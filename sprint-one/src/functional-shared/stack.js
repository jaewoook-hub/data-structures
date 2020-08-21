var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var someInstance = {storage: {}, stackSize: 0};

  // create a storage object
  // var storage = {};

  // extend storage by Stack.methods
  _.extend(someInstance, stackMethods);
  // set stackSize to zero

  //var stackSize = 0;

  // return a storage object
  return someInstance;
};

var stackMethods = {

  push: function(val) {
    this.storage[this.stackSize] = val;
    this.stackSize++;
  },

  pop: function() {
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
  },

  size: function() {
    return this.stackSize;
  }
};


// var test = Stack(); // {storage: {}, stackSize: 0, push: func() {  }, size: func() {}}

// test.push('a') // {storage: {0: 'a'}, stackSize: 1, push: func() {  }, size: func() {}}
// test.push('b') // {storage: {0: 'a', 1: 'b'}, stackSize: 2, push: func() {  }, size: func() {}}
// test.pop() // {storage: {0: 'a', 1: 'b'}, stackSize: 2, push: func() {  }, size: func() {}}
// //

/*
function(3) {
  storage[stackSize] = val;
  stackSize++;
}
*/
