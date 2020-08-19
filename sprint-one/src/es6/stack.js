class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.index = 0;
    this.storage = {};
  }

  size() {
    return this.index;
  }

  push(value) {
    this.storage[this.index] = value;
    this.index++;
  }

  pop() {
    if (this.index > 0) {
      this.index--;
      let popped = this.storage[this.index];
      delete this.storage[this.index];
      return popped;
    }
  }

}