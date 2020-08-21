var Stack = function() {
  this.storage = {};
  this.stackSize = 0;
};

Stack.prototype.push = function(val) {
  this.storage[this.stackSize] = val;
  this.stackSize++;
};

Stack.prototype.pop = function() {
  if (this.stackSize > 0) {
    this.stackSize--;
  }
  var poppedValue = this.storage[this.stackSize];
  delete this.storage[this.stackSize];
  return poppedValue;
};

Stack.prototype.size = function() {
  return this.stackSize;
};

