var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = Object.create(stackMethods);
  instance.key = 0;
  instance.store = {};
  return instance;
};

var stackMethods = {
  push(n) {
    this.store[this.key] = n;
    this.key++;
  },
  pop() {
    this.key--;
    if (this.key < 0) {
      this.key = 0;
    }
    return this.store[this.key];
  },
  size() {
    return this.key;
  }
};

stackMethods.size = function() {
  return this.index;
};

stackMethods.push = function(value) {
  this.storage[this.index] = value;
  this.index++;
};

stackMethods.pop = function() {
  if (this.index > 0) {
    this.index--;
    let popped = this.storage[this.index];
    delete this.storage[this.index];
    return popped;
  }
};