class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.index = 0;
    this.storage = {};
  }

  size() {
    return this.index;
  }

  dequeue() {
    if (this.index > 0) {
      let dequeued = this.storage[0];
      delete this.storage[0];
      for (let key in this.storage) {
        this.storage[key - 1] = this.storage[key];
      }
      this.index--;
      delete this.storage[this.index];
      return dequeued;
    }
  }

  enqueue(value) {
    this.storage[this.index] = value;
    this.index++;
  }

}