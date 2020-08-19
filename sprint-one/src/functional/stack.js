var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  var index = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    storage[index] = value;
    index++;
  };

  someInstance.pop = function() {
    index--;
    let popped = storage[index];
    delete storage[index];
    return popped;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};