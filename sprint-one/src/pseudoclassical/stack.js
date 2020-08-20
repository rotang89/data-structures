var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.key = 0;
  this.store = {};
};

Stack.prototype.push = function(n) {
  this.store[this.key] = n;
  this.key++;
};

Stack.prototype.pop = function() {
  this.key--;
  if (this.key < 0) {
    this.key = 0;
  }
  return this.store[this.key];
};

Stack.prototype.size = function() {
  return this.key;
};

Stack.prototype.size = function() {
  return this.index;
};

Stack.prototype.pop = function() {
  if (this.index > 0) {
    this.index--;
    let popped = this.storage[this.index];
    delete this.storage[this.index];
    return popped;
  }
};

Stack.prototype.push = function(value) {
  this.storage[this.index] = value;
  this.index++;
};