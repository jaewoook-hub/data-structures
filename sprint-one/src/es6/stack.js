class Stack {
  constructor() {
    this.stackSize = 0;
    this.storage = {};
  }

  push(val) {
    this.storage[this.stackSize] = val;
    this.stackSize++;
  }

  pop() {
    if (this.stackSize > 0) {
      this.stackSize--;
    }

    var poppedValue = this.storage[this.stackSize];
    delete this.storage[this.stackSize];
    return poppedValue;
  }

  size() {
    return this.stackSize;
  }
}
