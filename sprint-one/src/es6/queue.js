class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.i = 0;
    this.key = 0;
    this.storage = {};
  }

  enqueue(value) {
    this.i++;
    this.storage[this.key] = value;
    this.key++;
  }

  dequeue() {
    this.i--;
    if (this.i < 0) {
      this.i = 0;
    }
    var least = Infinity;
    for (var key in this.storage) {
      if (key < least) {
        least = key;
      }
    }
    var string = this.storage[least];
    delete this.storage[least];
    return string;
  }

  size() {
    return this.i;
  }
}