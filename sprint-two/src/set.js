var Set = function() {
  var set = Object.create(setPrototype);
  set.storage = [];
  return set;
};


var setPrototype = {};

//Make sure all values are unique before adding
setPrototype.add = function(item) {
  if (this.storage.indexOf(item) > -1) {
    return false;
  }
  this.storage.push(item);
};
//Iterate through to check if value exists
setPrototype.contains = function(item) {
  if (this.storage.indexOf(item) === -1) {
    return false;
  }
  return true;
};
//Splice selected value if it exists
setPrototype.remove = function(item) {
  if (this.storage.indexOf(item) > -1) {
    this.storage.splice(this.storage.indexOf(item), 1);
  }
  return false;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */