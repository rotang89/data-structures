var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = Object.create(queueMethods);
  instance.index = 0;
  instance.storage = {};
  return instance;
};

var queueMethods = {};

queueMethods.size = function() {
  return this.index;
};

queueMethods.enqueue = function(value) {
  this.storage[this.index] = value;
  this.index++;
};

queueMethods.dequeue = function() {
  if (this.index > 0) {
    var dequeued = this.storage[0];
    delete this.storage[0];
    for (var key in this.storage) {
      this.storage[key - 1] = this.storage[key];
    }
    delete this.storage[this.index - 1];
    this.index--;
    return dequeued;
  }
};