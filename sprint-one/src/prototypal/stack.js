var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = Object.create(stackMethods);
  instance.index = 0;
  instance.storage = {};
  return instance;
};

var stackMethods = {};

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