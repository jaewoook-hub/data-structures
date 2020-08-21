class Queue {
  constructor() {
    this.storage = {};
    this.queueSize = 0;
    this.unshiftedIndex = 0;
  }

  enqueue(val) {
    this.storage[this.queueSize + this.unshiftedIndex] = val;
    this.queueSize++;
  }

  dequeue() {
    if (this.queueSize > 0) {
      this.queueSize--;
    }
    var shiftedValue = this.storage[this.unshiftedIndex];
    delete this.storage[this.unshiftedIndex];
    this.unshiftedIndex++;
    return shiftedValue;
  }

  size() {
    return this.queueSize;
  }
}
