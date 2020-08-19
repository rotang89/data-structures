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
  if (this.key > 0) {
    this.key = 0;
  }
  return this.store[this.key];
};

Stack.prototype.size = function() {
  return this.key;
};


