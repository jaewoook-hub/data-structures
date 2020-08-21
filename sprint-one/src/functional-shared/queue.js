var Queue = function() {

  // var someInstance (an object) equal to a queueSize of 0 and storage of {}
  var someInstance = {storage: {}, queueSize: 0, shiftedIndex: 0};

  // extend someInstance by queueMethods
  _.extend(someInstance, queueMethods);

  // return someInstance
  return someInstance;
};

var queueMethods = {

  // enqueue: funct(val) {}
  enqueue: function(val) {
    this.storage[this.queueSize + this.shiftedIndex] = val;
    this.queueSize++;
  },

  // dequeue: funct() {}
  dequeue: function() {
    if (this.queueSize > 0) {
      this.queueSize--;
    }
    var shiftedValue = this.storage[this.shiftedIndex];
    delete this.storage[this.shiftedIndex];
    this.shiftedIndex++;
    return shiftedValue;
  },

  // size: funct() {}
  size: function() {
    return this.queueSize;
  }
};


