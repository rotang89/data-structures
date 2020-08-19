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


