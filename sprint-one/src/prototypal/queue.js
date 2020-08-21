var Queue = function() {
  var someInstance = Object.create(queueMethods);
  someInstance.storage = {};
  someInstance.queueSize = 0;
  someInstance.shiftedIndex = 0;
  return someInstance;
};

var queueMethods = {
  enqueue: function(val) {
    this.storage[this.queueSize + this.shiftedIndex] = val;
    this.queueSize++;
  },
  dequeue: function() {
    if (this.queueSize > 0) {
      this.queueSize--;
    }
    var shiftedValue = this.storage[this.shiftedIndex];
    delete this.storage[this.shiftedIndex];
    this.shiftedIndex++;
    return shiftedValue;
  },
  size: function() {
    return this.queueSize;
  }
};


