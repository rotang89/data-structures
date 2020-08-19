var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queue = {};
  queue.storage = {};
  queue.key = 0;
  queue.i = 0;
  _.extend(queue, queueMethods);
  return queue;
};

var queueMethods = {
  enqueue(value) {
    this.i++;
    this.storage[this.key] = value;
    this.key++;
  },
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
  },
  size() {
    return this.i;
  }
};


