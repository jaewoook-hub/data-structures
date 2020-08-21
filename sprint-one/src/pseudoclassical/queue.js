var Queue = function() {
  this.storage = {};
  this.queueSize = 0;
  this.shiftedIndex = 0;
};

Queue.prototype.enqueue = function(val) {
  this.storage[this.shiftedIndex + this.queueSize] = val;
  this.queueSize++;
};

Queue.prototype.dequeue = function() {
  if (this.queueSize > 0) {
    this.queueSize--;
  }

  var shiftedValue = this.storage[this.shiftedIndex];
  delete this.storage[this.shiftedIndex];
  this.shiftedIndex++;
  return shiftedValue;
};

Queue.prototype.size = function() {
  return this.queueSize;
};


